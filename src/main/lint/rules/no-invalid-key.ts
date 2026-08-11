import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty } from '../utils/ast-utils'

const INVALID_CHARS = /[^a-z-0-9\-]/g

export const noInvalidKey = createRule({
  name: 'no-invalid-key',
  meta: {
    docs: {
      description: 'Detects keys with invalid characters.',
    },
    messages: {
      invalidKey: 'Keys can only contain lowercase letters, numbers and hyphens.',
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const { property: keyProperty } = getDataObjectProperty(node, 'all', 'key')
        if (!keyProperty) return

        if (keyProperty.value.type !== AST_NODE_TYPES.Literal && keyProperty.value.type !== AST_NODE_TYPES.TemplateLiteral) return
        const isTemplate = keyProperty.value.type === AST_NODE_TYPES.TemplateLiteral
        const keyValue = sourceCode.getText(keyProperty.value)

        const keyText = keyValue.slice(1, -1)
        if (!INVALID_CHARS.test(keyText)) return

        const replacementValue = keyText
          .toLowerCase()
          .replaceAll(/\s/g, '-')
          .replaceAll(INVALID_CHARS, '')

        context.report({
          node: keyProperty.value,
          messageId: 'invalidKey',
          fix(fixer) {
            return fixer.replaceText(keyProperty.value, isTemplate ? `\`${replacementValue}\`` : `'${replacementValue}'`)
          },
        })
      },
    }
  },
})
