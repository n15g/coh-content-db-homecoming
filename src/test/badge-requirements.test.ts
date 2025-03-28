import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'

const database = new CohContentDatabase(HOMECOMING)

describe('Badge Requirements', () => {
  test('should only contain valid references', () => {
    const errors: string[] = []

    for (const badge of database.badges) {
      for (const group of badge.requirements ?? []) {
        for (const requirement of group) {
          if (!!requirement.badgeKey && !database.badgeExists(requirement.badgeKey)) errors.push(`['${badge.key}:${requirement.key}'].badgeKey['${requirement.badgeKey}']`)
          if (!!requirement.mapKey && !database.mapExists(requirement.mapKey)) errors.push(`['${badge.key}:${requirement.key}'].mapKey['${requirement.mapKey}']`)
        }
      }
    }

    if (errors.length > 0) {
      throw `Some requirements have invalid links:\n${errors.join('\n')}`
    }
  })
})
