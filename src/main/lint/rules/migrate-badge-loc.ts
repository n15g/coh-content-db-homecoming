import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObjectProperty, getProperty } from '../utils/ast-utils'

export const migrateBadgeLoc = createRule({
  name: 'migrate-badge-loc',
  meta: {
    docs: {
      description: `Migrates old badge loc + zoneKey format to a location field.`,
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

        const { dataObject: badgeData, property: loc } = getDataObjectProperty(node, 'BadgeData', 'loc')
        if (!badgeData || !loc) return

        const zoneKeyNode = getProperty(badgeData, 'zoneKey')
        const zoneKey = zoneKeyNode?.value ? sourceCode.getText(zoneKeyNode.value) : 'setme'

        const vidiotMapKeyNode = getProperty(badgeData, 'vidiotMapKey')
        const vidiotMapKey = vidiotMapKeyNode?.value ? sourceCode.getText(vidiotMapKeyNode.value) : undefined

        const coords = sourceCode.getText(loc.value)

        const newRequirementsText = `
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ${zoneKey}, coords: ${coords} }, ${vidiotMapKey ? 'vidiotMapKey: ' + vidiotMapKey : ''} },
  ],`
        const targetProp = badgeData.properties.at(-1) ?? node
        const location = sourceCode.getTokenAfter(targetProp)?.range ?? loc.range

        context.report({
          node: node,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [
              fixer.removeRange([loc.range[0] - 3, loc.range[1] + 1]),
              fixer.insertTextAfterRange(location, newRequirementsText),
            ]
            if (zoneKeyNode) actions.push(fixer.removeRange([zoneKeyNode.range[0] - 3, zoneKeyNode.range[1] + 1]))
            if (vidiotMapKeyNode) actions.push(fixer.removeRange([vidiotMapKeyNode.range[0] - 3, vidiotMapKeyNode.range[1] + 1]))
            return actions
          },
        })
      },
    }
  },
})
