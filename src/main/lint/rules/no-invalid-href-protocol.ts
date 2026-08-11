import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getProperty } from '../utils/ast-utils'
import { isValidProtocol } from '../../ts/utils/uri-utils'

export const noInvalidHrefProtocol = createRule({
  name: 'no-invalid-href-protocol',
  meta: {
    docs: {
      description: 'Detects urls containing invalid protocols.',
    },
    messages: {
      error: `Protocol is not allowed.`,
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        const sourceCode = context.sourceCode

        const hrefProperty = getProperty(node, 'href')
        if (hrefProperty?.value.type !== AST_NODE_TYPES.Literal && hrefProperty?.value.type !== AST_NODE_TYPES.TemplateLiteral) return

        const hrefText = sourceCode.getText(hrefProperty.value).slice(1, -1)
        if (isValidProtocol(hrefText)) return

        context.report({
          node: hrefProperty.value,
          messageId: 'error',
        })
      },
    }
  },
})
