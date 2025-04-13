import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { BadgeData } from 'coh-content-db'

const DATA_INTERFACES = ['BadgeData', 'ContactData', 'MissionData', 'ZoneData'] as const
export type DataInterface = typeof DATA_INTERFACES[number]

const ALTERNATE_FIELDS: Set<string> = new Set<keyof BadgeData>(['name', 'badgeText', 'icon'])

export function getProperty(node: TSESTree.Node | undefined, name: string): TSESTree.Property | undefined {
  if (node?.type === AST_NODE_TYPES.Property
    && node.key.type === AST_NODE_TYPES.Identifier
    && node.key.name === name) return node

  if (node?.type === AST_NODE_TYPES.ObjectExpression)
    return node?.properties.find(x => x.type === TSESTree.AST_NODE_TYPES.Property && x.key.type === TSESTree.AST_NODE_TYPES.Identifier && x.key.name === name) as TSESTree.Property
}

export function getDataObject(node: TSESTree.Node | undefined, dataInterface?: DataInterface | 'all'): TSESTree.ObjectExpression | undefined {
  if (node?.type !== AST_NODE_TYPES.ObjectExpression
    || node.parent.type !== AST_NODE_TYPES.VariableDeclarator
    || node.parent.id.type !== AST_NODE_TYPES.Identifier
    || node.parent.id.typeAnnotation?.typeAnnotation?.type !== AST_NODE_TYPES.TSTypeReference
    || node.parent.id.typeAnnotation?.typeAnnotation?.typeName.type !== AST_NODE_TYPES.Identifier) return

  const typeName = node.parent.id.typeAnnotation.typeAnnotation.typeName.name

  if (dataInterface && typeName === dataInterface) return node
  if ((!dataInterface || dataInterface === 'all') && DATA_INTERFACES.includes(typeName as DataInterface)) return node
}

export function getDataObjectProperty(node: TSESTree.Node | undefined, dataInterface?: DataInterface | 'all', named?: string): { dataObject?: TSESTree.ObjectExpression, property?: TSESTree.Property } {
  if (node?.type !== AST_NODE_TYPES.Property
    || node.key.type !== AST_NODE_TYPES.Identifier
    || (named && (node.key.name !== named))) return {}

  const dataObject = getDataObject(node.parent, dataInterface)
  if (!dataObject) return {}
  return { dataObject: dataObject, property: node }
}

export function getBadgeRequirementData(node: TSESTree.Node | undefined): { badgeData?: TSESTree.ObjectExpression, requirement?: TSESTree.ObjectExpression } {
  if (node?.type !== AST_NODE_TYPES.ObjectExpression) return {}

  const { dataObject: badgeData } = getDataObjectProperty(node?.parent?.parent, 'BadgeData', 'requirements')
  if (!badgeData) return {}

  return { badgeData, requirement: node }
}

export function asBadgeAlternateProperty(node?: TSESTree.Node): TSESTree.Property | undefined {
  if (node?.type !== AST_NODE_TYPES.Property
    || node?.key.type !== AST_NODE_TYPES.Identifier) return

  if (getDataObject(node?.parent, 'BadgeData') === undefined) return

  if (ALTERNATE_FIELDS.has(node.key.name)) return node
}
