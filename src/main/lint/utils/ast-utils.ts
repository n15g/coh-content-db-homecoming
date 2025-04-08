import { TSESTree } from '@typescript-eslint/utils'

export function getProperty<T>(name: keyof T, node?: TSESTree.ObjectExpression): TSESTree.Property | undefined {
  return node?.properties.find(x => x.type === TSESTree.AST_NODE_TYPES.Property && x.key.type === TSESTree.AST_NODE_TYPES.Identifier && x.key.name === name) as TSESTree.Property
}
