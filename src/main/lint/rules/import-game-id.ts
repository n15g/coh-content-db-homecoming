import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../utils/create-rule'
import { asBadgeAlternateProperty, getDataObject, getProperty } from '../utils/ast-utils'
import { AST } from 'eslint'
import path from 'node:path'
import fs from 'node:fs'
import Range = AST.Range

const csvPath = path.join(__dirname, 'badge-ids.csv')
const csv = fs.readFileSync(csvPath, 'utf8')

const badgeIdsByName = new Map<string, string>()

for (const line of csv.split('\n')) {
  if (!line.trim()) continue

  const [, aliases = '', id = ''] = line.split(';')
  if (!id || !aliases) continue
  const names = new Set<string>(aliases.split('/'))
  for (const name of names) {
    badgeIdsByName.set(name.trim().toLowerCase(), id.trim())
  }
}

export const importGameId = createRule({
  name: 'migrate-game-id',
  meta: {
    docs: {
      description: `Adds gameId to badges with no gameId from an export.`,
    },
    messages: {
      importGameId: `Import game id.`,
    },
    type: 'problem',
    schema: [],
    fixable: 'code',
  },
  create(context) {
    return {
      'ObjectExpression'(node: TSESTree.ObjectExpression) {
        const sourceCode = context.sourceCode

        const badgeData = getDataObject(node, 'BadgeData')
        if (!badgeData) return

        const gameIdProp = getProperty(node, 'gameId')
        if (gameIdProp) return

        const keyProperty = getProperty(badgeData, 'key')
        const nameProperty = getProperty(badgeData, 'name')
        const nameAlternate = asBadgeAlternateProperty(nameProperty)

        if (!nameProperty) return
        let name = ''
        if (nameProperty.value.type === AST_NODE_TYPES.Literal || nameProperty.value.type === AST_NODE_TYPES.TemplateLiteral) {
          name = sourceCode.getText(nameProperty.value).slice(1, -1).trim().toLowerCase()
        } else if (nameAlternate) {
          if (nameAlternate.value.type !== AST_NODE_TYPES.ArrayExpression) return
          if (nameAlternate.value.elements.length === 0) return

          const alternateObjectLiteral = nameAlternate.value.elements[0]
          if (alternateObjectLiteral?.type !== AST_NODE_TYPES.ObjectExpression) return

          const prop = getProperty(alternateObjectLiteral, 'value')
          if (!prop) return
          name = sourceCode.getText(prop.value).slice(1, -1).trim().toLowerCase()
        }

        const targetProp = keyProperty ?? badgeData.properties.at(-1)
        const range: Range = targetProp ? [targetProp.range[0], targetProp.range[1] + 2] : [badgeData.range[0], badgeData.range[0] + 2]

        const badgeId = badgeIdsByName.get(name)?.replaceAll(`'`, String.raw`\'`)
        if (!badgeId) return

        context.report({
          node: badgeData,
          messageId: 'importGameId',
          fix(fixer) {
            return fixer.insertTextAfterRange(range, `  gameId: '${badgeId}',\n`)
          },
        })
      },
    }
  },
})
