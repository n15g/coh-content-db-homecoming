import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getBadgeRequirementData, getProperty } from '../utils/ast-utils'

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
        const type = getProperty(node, 'type')
        if (type?.value.type !== AST_NODE_TYPES.Literal || type.value.value !== 'PLAQUE') return

        const { requirement } = getBadgeRequirementData(node.parent)
        if (!requirement) return

        const plaqueTypeNode = getProperty(requirement, 'plaqueType')
        const plaqueType = getPlaqueType(plaqueTypeNode)

        context.report({
          node: type,
          messageId: 'plsMigrate',
          data: {
            plaqueType,
          },
          fix(fixer) {
            return fixer.replaceText(type.value, `'${plaqueType}'`)
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
