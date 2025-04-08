import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { isBadgeAlternateProperty } from '../utils/badge-ast-utils'

export const noEmptyAlternate = createRule({
  name: 'prefer-simple-alternate',
  meta: {
    docs: {
      description: 'Detects alternate fields with no values.',
    },
    messages: {
      mustHaveValue: 'Alternates must have at least one value.',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        if (!isBadgeAlternateProperty(node)) return
        if (node.value.type !== AST_NODE_TYPES.ArrayExpression) return
        if (node.value.elements.length > 0) return

        context.report({
          node: node.value,
          messageId: 'mustHaveValue',
        })
      },
    }
  },
})
