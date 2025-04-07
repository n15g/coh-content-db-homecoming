import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from './rule-utils'
import { BadgeData } from 'coh-content-db'

const checkedFields: Set<string> = new Set<keyof BadgeData>(['name', 'badgeText', 'icon'])

export const preferSimpleAlternate = createRule({
  name: 'single-value-alternate',
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
        if (!isBadgeData(node)) return
        if (!isCheckedField(node)) return
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

function isBadgeData(node: TSESTree.Property): boolean {
  return node.parent.type === AST_NODE_TYPES.ObjectExpression
    && node.parent?.parent?.type === AST_NODE_TYPES.VariableDeclarator
    && node.parent.parent.id.type === AST_NODE_TYPES.Identifier
    && node.parent.parent.id.typeAnnotation?.typeAnnotation?.type === AST_NODE_TYPES.TSTypeReference
    && (node.parent.parent.id.typeAnnotation.typeAnnotation.typeName as TSESTree.Identifier).name === 'BadgeData'
}

function isCheckedField(node: TSESTree.Property): boolean {
  return node.key.type === AST_NODE_TYPES.Identifier
    && checkedFields.has(node.key.name)
}
