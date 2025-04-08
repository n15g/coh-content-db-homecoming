import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { isBadgeProperty } from '../utils/badge-ast-utils'
import { getProperty } from '../utils/ast-utils'

export const migrateRequirementPlaqueType = createRule({
  name: 'migrate-requirement-plaque-type',
  meta: {
    docs: {
      description: `Migrates requirements with 'PLAQUE' type to the new format.`,
    },
    messages: {
      plsMigrate: `Should be '{{ plaqueType }}'.`,
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    return {
      'Property'(node: TSESTree.Property) {
        if (node.key.type !== AST_NODE_TYPES.Identifier || node.key.name !== 'type') return
        if (node.value.type !== AST_NODE_TYPES.Literal || node.value.value !== 'PLAQUE') return

        const requirementObjectExpression = node.parent as TSESTree.ObjectExpression
        if (!isBadgeProperty(requirementObjectExpression.parent?.parent, 'requirements')) return

        const plaqueTypeNode = getProperty('plaqueType', requirementObjectExpression)
        const plaqueType = getPlaqueType(plaqueTypeNode)

        context.report({
          node: node.value,
          messageId: 'plsMigrate',
          data: {
            plaqueType,
          },
          fix(fixer) {
            return fixer.replaceText(node.value, `'${plaqueType}'`)
          },
        })
      },
    }
  },
})

function getPlaqueType(plaqueTypeNode?: TSESTree.Property): 'plaque' | 'pedestal' {
  if (!plaqueTypeNode || plaqueTypeNode.value.type !== AST_NODE_TYPES.Literal) return 'plaque'

  return plaqueTypeNode.value.value === 'MONUMENT' ? 'pedestal' : 'plaque'
}
