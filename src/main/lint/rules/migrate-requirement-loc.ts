import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getBadgeRequirementData, getProperty } from '../utils/ast-utils'

export const migrateRequirementLoc = createRule({
  name: 'migrate-requirement-loc',
  meta: {
    docs: {
      description: `Migrates old loc + zoneKey format to a location field.`,
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

        const loc = getProperty(node, 'loc')
        if (!loc) return

        const { requirement } = getBadgeRequirementData(node.parent)
        if (!requirement) return

        const zoneKey = getProperty(requirement, 'zoneKey')
        const zoneKeyValue = zoneKey?.value ? sourceCode.getText(zoneKey.value) : 'setme'
        const coords = sourceCode.getText(loc.value)

        context.report({
          node: loc,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [fixer.replaceText(loc, `location: { zoneKey: ${zoneKeyValue}, coords: ${coords} }`)]

            if (zoneKey) actions.push(fixer.removeRange([zoneKey.range[0] - 7, zoneKey.range[1] + 1]))
            return actions
          },
        })
      },
    }
  },
})
