import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'

export function isContactObjectExpression(node?: TSESTree.Node): boolean {
  return node?.type === AST_NODE_TYPES.ObjectExpression
    && node.parent?.type === AST_NODE_TYPES.VariableDeclarator
    && node.parent.id.type === AST_NODE_TYPES.Identifier
    && node.parent.id.typeAnnotation?.typeAnnotation?.type === AST_NODE_TYPES.TSTypeReference
    && (node.parent.id.typeAnnotation.typeAnnotation.typeName as TSESTree.Identifier).name === 'ContactData'
}

export function isContactProperty(node?: TSESTree.Node, named?: string): boolean {
  return node?.type === AST_NODE_TYPES.Property
    && (!named || (node.key.type === AST_NODE_TYPES.Identifier && node.key.name === named))
    && isContactObjectExpression(node.parent)
}
