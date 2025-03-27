import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'

const LINK_PATTERN = /\((badge|map):\/\/([^\)]*)\)/g
const database = new CohContentDatabase(HOMECOMING)

function validateLinks(label: string, field?: string): void {
  if (!field) return
  const links = [...field.matchAll(LINK_PATTERN)]
    .map(match => [match[1], match[2]])

  for (const [type, key] of links) {
    if (type === 'badge' && !validBadgeKey(key)) throw new Error(`${label} - Invalid badge key [${key}]`)
    if (type === 'map' && !validMapKey(key)) throw new Error(`${label} - Invalid map key [${key}]`)
  }
}

function validBadgeKey(key: string): boolean {
  try {
    return database.getBadge(key) !== undefined
  } catch {
    return false
  }
}

function validMapKey(key: string): boolean {
  try {
    return database.getMap(key) !== undefined
  } catch {
    return false
  }
}

describe('Markdown Links', () => {
  test('should all be to valid entities', () => {

    for (const badge of database.badges) {
      validateLinks(`Badge [${badge.key}] notes`, badge.notes)
      validateLinks(`Badge [${badge.key}] acquisition`, badge.acquisition)
      validateLinks(`Badge [${badge.key}] effect`, badge.effect)

      for (const partial of badge.partials ?? []) {
        validateLinks(`Badge Partial [${badge.key}:${partial.key}] notes`, badge.notes)
      }
    }
  })
})
