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
        const eol = sourceCode.text.includes('\r\n') ? '\r\n' : '\n'

        const badgeData = getDataObject(node, 'BadgeData')
        if (!badgeData) return

        const keyProperty = getProperty(badgeData, 'key')
        const nameProperty = getProperty(badgeData, 'name')
        const nameAlternate = asBadgeAlternateProperty(nameProperty)

        if (!nameProperty) return
        let names: [string?, string?] | undefined
        if (nameProperty.value.type === AST_NODE_TYPES.Literal || nameProperty.value.type === AST_NODE_TYPES.TemplateLiteral) {
          names = [sourceCode.getText(nameProperty.value).slice(1, -1).trim().toLowerCase()]
        } else if (nameAlternate) {
          if (nameAlternate.value.type !== AST_NODE_TYPES.ArrayExpression) return
          if (nameAlternate.value.elements.length === 0) return

          let primalName: string | undefined
          let praetorianName: string | undefined

          for (const element of nameAlternate.value.elements) {
            if (element?.type !== AST_NODE_TYPES.ObjectExpression) continue

            const valueProp = getProperty(element, 'value')
            if (!valueProp) continue
            const name = sourceCode.getText(valueProp.value).slice(1, -1).trim().toLowerCase()

            const alignmentProp = getProperty(element, 'alignment')
            if (alignmentProp) {
              const alignment = sourceCode.getText(alignmentProp.value).slice(1, -1).trim()
              if (alignment === 'praetorian') {
                praetorianName = name
                continue
              }
            }
            primalName = name
          }
          names = [primalName, praetorianName]
        }

        const primalId = badgeIdsByName.get(names?.[0] ?? '')?.replaceAll(`'`, String.raw`\'`)
        if (!primalId) return
        const praetorianId = badgeIdsByName.get(names?.[1] ?? '')?.replaceAll(`'`, String.raw`\'`)
        const newValue = praetorianId ? `['${primalId}', '${praetorianId}']` : `'${primalId}'`

        const gameIdProp = getProperty(node, 'gameId')
        if (gameIdProp) {
          const currentValue = sourceCode.getText(gameIdProp.value)
          if (currentValue === newValue) {
            return
          }

          context.report({
            node: gameIdProp.value,
            messageId: 'importGameId',
            fix(fixer) {
              return fixer.replaceText(gameIdProp.value, newValue)
            },
          })
        } else {
          const targetProp = keyProperty ?? badgeData.properties.at(-1)
          const range: Range = targetProp
            ? [targetProp.range[0], targetProp.range[1]]
            : [badgeData.range[0], badgeData.range[0] + 1]

          context.report({
            node: badgeData,
            messageId: 'importGameId',
            fix(fixer) {
              return fixer.insertTextAfterRange(range, `,${eol}  gameId: ${newValue}`)
            },
          })
        }
      },
    }
  },
})
