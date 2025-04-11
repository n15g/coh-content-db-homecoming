import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty } from '../utils/ast-utils'

export const preferAcquisitionPeriod = createRule({
  name: 'prefer-acquisition-period',
  meta: {
    docs: {
      description: 'Badge acquisition text should end with a period.',
    },
    messages: {
      error: 'Should end with a period.',
    },
    type: 'suggestion',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const { property: acquisitionProp } = getDataObjectProperty(node, 'BadgeData', 'acquisition')
        if (!acquisitionProp) return

        if (acquisitionProp.value.type !== AST_NODE_TYPES.Literal) return
        const keyValue = sourceCode.getText(acquisitionProp.value)

        const acquisitionText = keyValue.slice(1, -1)
        if (acquisitionText.endsWith('.')) return

        context.report({
          node: acquisitionProp.value,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(acquisitionProp.value, `'${acquisitionText}.'`)
          },
        })
      },
    }
  },
})
