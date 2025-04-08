import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { isBadgeAlternateProperty } from '../utils/badge-ast-utils'

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
        if (!isBadgeAlternateProperty(node)) return
        if (node.value.type !== AST_NODE_TYPES.ArrayExpression) return
        if (node.value.elements.length !== 1) return

        const alternateObjectLiteral = node.value.elements[0]
        if (alternateObjectLiteral?.type !== AST_NODE_TYPES.ObjectExpression) return
        const prop = alternateObjectLiteral.properties.find(x => x.type === AST_NODE_TYPES.Property && x.key.type === AST_NODE_TYPES.Identifier && x.key.name === 'value')

        if (prop?.type === AST_NODE_TYPES.Property) {
          const source = context.sourceCode.getText(prop.value)
          context.report({
            node: node.value,
            messageId: 'replaceWithSingleValue',
            fix(fixer) {
              return fixer.replaceText(node.value, source)
            },
          })
        }
      },
    }
  },
})
