import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { isBadgeProperty } from '../utils/badge-ast-utils'
import { getProperty } from '../utils/ast-utils'

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

        if (node.key.type !== AST_NODE_TYPES.Identifier || node.key.name !== 'loc') return

        const requirementObjectExpression = node.parent as TSESTree.ObjectExpression
        if (!isBadgeProperty(requirementObjectExpression.parent?.parent, 'requirements')) return

        const zoneKeyNode = getProperty('zoneKey', requirementObjectExpression)
        const zoneKey = zoneKeyNode?.value ? sourceCode.getText(zoneKeyNode.value) : 'setme'
        const coords = sourceCode.getText(node.value)

        context.report({
          node: node.value,
          messageId: 'plsMigrate',
          fix(fixer) {
            const actions = [fixer.replaceText(node, `location: { zoneKey: ${zoneKey}, coords: ${coords} }`)]

            if (zoneKeyNode) actions.push(fixer.removeRange([zoneKeyNode.range[0] - 7, zoneKeyNode.range[1] + 1]))
            return actions
          },
        })
      },
    }
  },
})
