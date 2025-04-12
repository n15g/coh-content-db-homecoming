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

        if (acquisitionProp.value.type !== AST_NODE_TYPES.Literal && acquisitionProp.value.type !== AST_NODE_TYPES.TemplateLiteral) return
        const template = acquisitionProp.value.type === AST_NODE_TYPES.TemplateLiteral
        const acquisitionValue = sourceCode.getText(acquisitionProp.value)

        const acquisitionText = acquisitionValue.slice(1, -1)
        if (acquisitionText.endsWith('.')) return

        context.report({
          node: acquisitionProp.value,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(acquisitionProp.value, template ? `\`${acquisitionText}.\`` : `'${acquisitionText}.'`)
          },
        })
      },
    }
  },
})
