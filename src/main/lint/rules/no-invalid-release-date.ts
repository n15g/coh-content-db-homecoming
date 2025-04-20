import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty } from '../utils/ast-utils'

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export const noInvalidReleaseDate = createRule({
  name: 'no-invalid-release-date',
  meta: {
    docs: {
      description: 'Detects badges with an invalid release date format.',
    },
    messages: {
      invalid: 'Release date must be in ISO-8601 Date format (YYYY-MM-DD).',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const { property: releaseDateProp } = getDataObjectProperty(node, 'BadgeData', 'releaseDate')
        if (!releaseDateProp) return

        if (releaseDateProp.value.type !== AST_NODE_TYPES.Literal && releaseDateProp.value.type !== AST_NODE_TYPES.TemplateLiteral) return
        const keyValue = sourceCode.getText(releaseDateProp.value)

        const keyText = keyValue.slice(1, -1)
        if (DATE_PATTERN.test(keyText)) return

        context.report({
          node: releaseDateProp.value,
          messageId: 'invalid',
        })
      },
    }
  },
})
