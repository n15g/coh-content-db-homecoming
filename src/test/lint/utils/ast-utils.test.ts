import { asBadgeAlternateProperty, getBadgeRequirementData, getProperty } from '../../../main/lint/utils/ast-utils'
import { instance, mock, when } from 'ts-mockito'
import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'

describe('getProperty', () => {
  test('should return undefined when unrelated node', () => {
    const nodeMock = mock<TSESTree.Identifier>()
    when(nodeMock.type).thenReturn(AST_NODE_TYPES.Identifier)
    expect(getProperty(instance(nodeMock), 'target')).toBeUndefined()
  })

  test('should return node when a matching property', () => {
    const nodeMock = mock<TSESTree.Property>()
    when(nodeMock.type).thenReturn(AST_NODE_TYPES.Property)
    when(nodeMock.key).thenReturn(function () {
      const key = mock<TSESTree.Identifier>()
      when(key.type).thenReturn(AST_NODE_TYPES.Identifier)
      when(key.name).thenReturn('target')
      return instance(key)
    }())

    const node = instance(nodeMock)
    expect(getProperty(node, 'target')).toBe(node)
  })
})

describe('getBadgeRequirementData', () => {
  test('should return nothing if node is not an ObjectExpression', () => {
    const nonObjectExpr = mock<TSESTree.ObjectPattern>()
    when(nonObjectExpr.type).thenReturn(AST_NODE_TYPES.ObjectPattern)

    const result = getBadgeRequirementData(instance(nonObjectExpr))
    expect(result).toEqual({})
  })

  test('should return empty object if node is undefined', () => {
    const node = undefined
    const result = getBadgeRequirementData(node)
    expect(result).toEqual({})
  })
})

describe('asBadgeAlternateProperty', () => {
  test('should return undefined if node is not a Property', () => {
    const node = mock<TSESTree.ExpressionStatement>()
    when(node.type).thenReturn(AST_NODE_TYPES.ExpressionStatement)

    const result = asBadgeAlternateProperty(instance(node))
    expect(result).toBeUndefined()
  })

  test('should return undefined if node is undefined', () => {
    const node = undefined
    const result = asBadgeAlternateProperty(node)
    expect(result).toBeUndefined()
  })
})
