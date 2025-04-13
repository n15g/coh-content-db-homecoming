import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty, getProperty } from '../utils/ast-utils'

export const migrateContactLoc = createRule({
  name: 'migrate-contact-loc',
  meta: {
    docs: {
      description: `Migrates old contact loc + zoneKey format to a location field.`,
    },
    messages: {
      plsMigrate: `Convert to a location field.`,
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

        const { dataObject: contactData, property: loc } = getDataObjectProperty(node, 'ContactData', 'loc')
        if (!contactData || !loc) return

        const zoneKeyNode = getProperty(contactData, 'zoneKey')
        const zoneKey = zoneKeyNode?.value ? sourceCode.getText(zoneKeyNode.value) : 'setme'
        const coords = sourceCode.getText(loc.value)

        context.report({
          node: node,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [fixer.replaceText(loc, `location: { zoneKey: ${zoneKey}, coords: ${coords} }`)]

            if (zoneKeyNode) actions.push(fixer.removeRange([zoneKeyNode.range[0] - 3, zoneKeyNode.range[1] + 1]))
            return actions
          },
        })
      },
    }
  },
})
