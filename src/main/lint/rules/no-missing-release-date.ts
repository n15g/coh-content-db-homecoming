import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { getDataObject, getProperty } from '../utils/ast-utils'
import { AST } from 'eslint'
import Range = AST.Range

export const noMissingReleaseDate = createRule({
  name: 'no-missing-release-date',
  meta: {
    docs: {
      description: 'Detects badges with no release date set.',
    },
    messages: {
      missingReleaseDate: 'Add a release date.',
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    return {
      'ObjectExpression'(node: TSESTree.ObjectExpression) {
        const badgeExpression = getDataObject(node, 'BadgeData')
        if (!badgeExpression) return

        const releaseDateProp = getProperty(node, 'releaseDate')
        if (releaseDateProp) return

        const nameProperty = getProperty(node, 'name')

        const targetProp = nameProperty ?? badgeExpression.properties.at(-1)
        const range: Range = targetProp ? [targetProp.range[0], targetProp.range[1] + 2] : [badgeExpression.range[0], badgeExpression.range[0] + 2]

        const insertText = `  releaseDate: '2012-11-30',\n`

        context.report({
          node: badgeExpression,
          messageId: 'missingReleaseDate',
          fix(fixer) {
            return fixer.insertTextAfterRange(range, insertText)
          },
        })
      },
    }
  },
})
