import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getProperty } from '../utils/ast-utils'
import { isContactProperty } from '../utils/contact-ast-utils'

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

        const contactObjectExpression = node.parent as TSESTree.ObjectExpression
        if (!isContactProperty(node, 'loc')) return

        const zoneKeyNode = getProperty('zoneKey', contactObjectExpression)
        const zoneKey = zoneKeyNode?.value ? sourceCode.getText(zoneKeyNode.value) : 'setme'
        const coords = sourceCode.getText(node.value)

        context.report({
          node: node.value,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [fixer.replaceText(node, `location: { zoneKey: ${zoneKey}, coords: ${coords} }`)]

            if (zoneKeyNode) actions.push(fixer.removeRange([zoneKeyNode.range[0] - 3, zoneKeyNode.range[1] + 1]))
            return actions
          },
        })
      },
    }
  },
})
