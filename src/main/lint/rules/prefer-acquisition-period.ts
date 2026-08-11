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

        const { property: acquisitionProperty } = getDataObjectProperty(node, 'BadgeData', 'acquisition')
        if (!acquisitionProperty) return

        if (acquisitionProperty.value.type !== AST_NODE_TYPES.Literal && acquisitionProperty.value.type !== AST_NODE_TYPES.TemplateLiteral) return
        const isTemplate = acquisitionProperty.value.type === AST_NODE_TYPES.TemplateLiteral
        const acquisitionValue = sourceCode.getText(acquisitionProperty.value)

        const acquisitionText = acquisitionValue.slice(1, -1)
        if (acquisitionText.endsWith('.')) return

        context.report({
          node: acquisitionProperty.value,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(acquisitionProperty.value, isTemplate ? `\`${acquisitionText}.\`` : `'${acquisitionText}.'`)
          },
        })
      },
    }
  },
})
