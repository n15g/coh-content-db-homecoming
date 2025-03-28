import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'

const LINK_PATTERN = /\((badge|map):\/\/([^)]*)\)/g
const database = new CohContentDatabase(HOMECOMING)

function validateLinks(field?: string): [string, string][] {
  if (!field) return []

  const errors: [string, string][] = []

  const links = [...field.matchAll(LINK_PATTERN)]
    .map(match => [match[1], match[2]])

  for (const [type, key] of links) {
    if (type === 'badge' && !database.badgeExists(key)) errors.push(['badge', key])
    if (type === 'map' && !database.mapExists(key)) errors.push(['map', key])
  }

  return errors
}

describe('Markdown Links', () => {
  test('should all be links to valid entities', () => {
    const errors: string[] = []

    for (const badge of database.badges) {
      for (const error of validateLinks(badge.acquisition)) errors.push(`['${badge.key}'].acquisition - ['${error[0]}:${error[1]}']`)
      for (const error of validateLinks(badge.effect)) errors.push(`['${badge.key}'].effect - ['${error[0]}:${error[1]}']`)
      for (const error of validateLinks(badge.notes)) errors.push(`['${badge.key}'].notes - ['${error[0]}:${error[1]}']`)

      for (const group of badge.requirements ?? []) {
        for (const requirement of group) {
          for (const error of validateLinks(requirement.notes)) errors.push(`['${badge.key}:${requirement.key}'].notes - ['${error[0]}:${error[1]}']`)
        }
      }
    }

    if (errors.length > 0) {
      throw `Some badges have invalid links:\n${errors.join('\n')}`
    }
  })
})
