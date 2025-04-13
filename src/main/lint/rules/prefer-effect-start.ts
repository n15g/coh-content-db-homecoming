import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty } from '../utils/ast-utils'

export const preferEffectStart = createRule({
  name: 'prefer-effect-start',
  meta: {
    docs: {
      description: 'Badge effects should end with a period.',
    },
    messages: {
      error: `Should start with a either 'Awards' or 'Unlocks'.`,
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const { property: effectProp } = getDataObjectProperty(node, 'BadgeData', 'effect')
        if (!effectProp) return

        if (effectProp.value.type !== AST_NODE_TYPES.Literal && effectProp.value.type !== AST_NODE_TYPES.TemplateLiteral) return
        const keyValue = sourceCode.getText(effectProp.value)

        const effectText = keyValue.slice(1, -1)
        if (effectText.startsWith('Awards') || effectText.startsWith('Unlocks')) return

        context.report({
          node: effectProp.value,
          messageId: 'error',
        })
      },
    }
  },
})
