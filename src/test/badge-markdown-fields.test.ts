import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'

const LINK_PATTERN = /\((badge|zone|contact):\/\/([^)]*)\)/g
const database = new CohContentDatabase(HOMECOMING)

function validateLinks(field?: string): [string, string][] {
  if (!field) return []

  const errors: [string, string][] = []

  const links = [...field.matchAll(LINK_PATTERN)]
    .map(match => [match[1], match[2]])

  for (const [type, key] of links) {
    if (type === 'badge' && !database.badgeExists(key)) errors.push(['badge', key])
    if (type === 'contact' && !database.contactExists(key)) errors.push(['contact', key])
    if (type === 'zone' && !database.zoneExists(key)) errors.push(['zone', key])
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

      for (const badgeText of badge.badgeText.canonical ?? []) {
        for (const error of validateLinks(badgeText.value)) errors.push(`['${badge.key}'].badgeText - ['${error[0]}:${error[1]}']`)
      }

      for (const requirement of badge.requirements ?? []) {
        for (const error of validateLinks(requirement.notes)) errors.push(`['${badge.key}:${requirement.key}'].notes - ['${error[0]}:${error[1]}']`)
      }
    }

    if (errors.length > 0) {
      throw `Some badges have invalid links:\n${errors.join('\n')}`
    }
  })
})
