import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'

export const noNegZero = createRule({
  name: 'no-neg-zero',
  meta: {
    docs: {
      description: 'Detects numeric literals with an unnecessary value of negative zero that will not serialize to JSON.',
    },
    messages: {
      error: 'Negative zero is not allowed.',
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    return {
      'UnaryExpression'(node: TSESTree.UnaryExpression) {
        const sourceCode = context.sourceCode

        const text = sourceCode.getText(node)
        if (text !== '-0') return

        context.report({
          node,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(node, '0')
          },
        })
      },
    }
  },
})
