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
          if (!!requirement.contactKey && !database.contactExists(requirement.contactKey)) errors.push(`['${badge.key}:${requirement.key}'].contactKey['${requirement.contactKey}']`)
          if (!!requirement.zoneKey && !database.zoneExists(requirement.zoneKey)) errors.push(`['${badge.key}:${requirement.key}'].zoneKey['${requirement.zoneKey}']`)
        }
      }
    }

    if (errors.length > 0) {
      throw `Some requirements have invalid links:\n${errors.join('\n')}`
    }
  })
})
