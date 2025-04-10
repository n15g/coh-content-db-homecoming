import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { isBadgeProperty } from '../utils/badge-ast-utils'
import { getProperty } from '../utils/ast-utils'

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

        if (!isBadgeProperty(node, 'loc')) return

        const badge = node.parent as TSESTree.ObjectExpression

        const zoneKeyNode = getProperty('zoneKey', badge)
        const zoneKey = zoneKeyNode?.value ? sourceCode.getText(zoneKeyNode.value) : 'setme'

        const vidiotMapKeyNode = getProperty('vidiotMapKey', badge)
        const vidiotMapKey = vidiotMapKeyNode?.value ? sourceCode.getText(vidiotMapKeyNode.value) : undefined

        const coords = sourceCode.getText(node.value)

        const newRequirementsText = `
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ${zoneKey}, coords: ${coords} }, ${vidiotMapKey ? 'vidiotMapKey: ' + vidiotMapKey : ''} },
  ],`
        const targetProp = badge.properties.at(-1) ?? node
        const location = sourceCode.getTokenAfter(targetProp)?.range ?? node.range

        context.report({
          node: node.value,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [
              fixer.removeRange([node.range[0] - 3, node.range[1] + 1]),
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
