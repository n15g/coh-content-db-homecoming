import { BadgeData } from 'coh-content-db'
import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'

const alternateFields: Set<string> = new Set<keyof BadgeData>(['name', 'badgeText', 'icon'])

export function isBadgeObjectExpression(node?: TSESTree.Node): boolean {
  return node?.type === AST_NODE_TYPES.ObjectExpression
    && node.parent?.type === AST_NODE_TYPES.VariableDeclarator
    && node.parent.id.type === AST_NODE_TYPES.Identifier
    && node.parent.id.typeAnnotation?.typeAnnotation?.type === AST_NODE_TYPES.TSTypeReference
    && (node.parent.id.typeAnnotation.typeAnnotation.typeName as TSESTree.Identifier).name === 'BadgeData'
}

export function isBadgeProperty(node?: TSESTree.Node, named?: string): boolean {
  return node?.type === AST_NODE_TYPES.Property
    && (!named || (node.key.type === AST_NODE_TYPES.Identifier && node.key.name === named))
    && isBadgeObjectExpression(node.parent)
}

export function isBadgeAlternateProperty(node?: TSESTree.Node): boolean {
  return node?.type === AST_NODE_TYPES.Property
    && isBadgeObjectExpression(node.parent)
    && node.key.type === AST_NODE_TYPES.Identifier
    && alternateFields.has(node.key.name)
}
