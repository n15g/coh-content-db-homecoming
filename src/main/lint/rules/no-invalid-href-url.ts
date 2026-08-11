import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getProperty } from '../utils/ast-utils'
import { isValidUrl } from '../../ts/utils/uri-utils'

export const noInvalidHrefUrl = createRule({
  name: 'no-invalid-href-url',
  meta: {
    docs: {
      description: 'Detects urls containing unsafe characters.',
    },
    messages: {
      error: 'Contains url unsafe characters.',
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

        const hrefProperty = getProperty(node, 'href')
        if (hrefProperty?.value.type !== AST_NODE_TYPES.Literal && hrefProperty?.value.type !== AST_NODE_TYPES.TemplateLiteral) return

        const hrefText = sourceCode.getText(hrefProperty.value).slice(1, -1)
        if (isValidUrl(hrefText)) return

        const replacementValue = encodeURI(hrefText)

        context.report({
          node: hrefProperty.value,
          messageId: 'error',
          fix(fixer) {
            return fixer.replaceText(hrefProperty.value, /'/.test(replacementValue) ? `\`${replacementValue}\`` : `'${replacementValue}'`)
          },
        })
      },
    }
  },
})
