import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { asBadgeAlternateProperty } from '../utils/ast-utils'

export const preferSimpleAlternate = createRule({
  name: 'prefer-simple-alternate',
  meta: {
    docs: {
      description: 'Detect unnecessary wrapping of single values for alternates.',
    },
    messages: {
      replaceWithSingleValue: 'Use the value directly when there is only a single value.',
    },
    fixable: 'code',
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const alternateField = asBadgeAlternateProperty(node)
        if (!alternateField) return

        if (alternateField.value.type !== AST_NODE_TYPES.ArrayExpression) return
        if (alternateField.value.elements.length !== 1) return

        const alternateObjectLiteral = alternateField.value.elements[0]
        if (alternateObjectLiteral?.type !== AST_NODE_TYPES.ObjectExpression) return
        const prop = alternateObjectLiteral.properties.find(x => x.type === AST_NODE_TYPES.Property && x.key.type === AST_NODE_TYPES.Identifier && x.key.name === 'value')
        if (prop?.type !== AST_NODE_TYPES.Property) return

        const valueText = sourceCode.getText(prop.value)
        context.report({
          node: alternateField,
          messageId: 'replaceWithSingleValue',
          fix(fixer) {
            return fixer.replaceText(alternateField.value, valueText)
          },
        })
      },
    }
  },
})
