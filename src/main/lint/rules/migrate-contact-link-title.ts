import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty, getProperty } from '../utils/ast-utils'

export const migrateContactLinkTitle = createRule({
  name: 'migrate-contact-loc',
  meta: {
    docs: {
      description: `Fixes contact links that just have the title 'Homecoming Wiki'.`,
    },
    messages: {
      error: `Replace with {{ contactName }}.`,
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

        const titleNode = getProperty(node, 'title')
        if (titleNode?.value.type !== AST_NODE_TYPES.Literal || titleNode.value.value !== 'Homecoming Wiki') return

        const { dataObject: contactData } = getDataObjectProperty(node.parent?.parent?.parent, 'ContactData', 'links')
        if (!contactData) return

        const contactNameNode = getProperty(contactData, 'name')
        const contactName = contactNameNode?.value ? sourceCode.getText(contactNameNode.value) : 'setme'

        context.report({
          node: titleNode.value,
          messageId: 'error',
          data: { contactName },
          fix(fixer) {
            return fixer.replaceText(titleNode.value, contactName)
          },
        })
      },
    }
  },
})
