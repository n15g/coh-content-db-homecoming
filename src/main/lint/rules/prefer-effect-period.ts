import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty } from '../utils/ast-utils'

export const preferEffectPeriod = createRule({
  name: 'prefer-effect-period',
  meta: {
    docs: {
      description: 'Badge effects should end with a period.',
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

        const { property: effectProp } = getDataObjectProperty(node, 'BadgeData', 'effect')
        if (!effectProp) return

        if (effectProp.value.type !== AST_NODE_TYPES.Literal) return
        const keyValue = sourceCode.getText(effectProp.value)

        const effectText = keyValue.slice(1, -1)
        if (effectText.endsWith('.')) return

        context.report({
          node: effectProp.value,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(effectProp.value, `'${effectText}.'`)
          },
        })
      },
    }
  },
})
