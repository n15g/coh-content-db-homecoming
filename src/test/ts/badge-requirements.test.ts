import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../../main/ts'

const database = new CohContentDatabase(HOMECOMING)

describe('Badge Requirements', () => {
  test('should only contain valid references', () => {
    const errors: string[] = []

    for (const badge of database.badges) {
      for (const requirement of badge.requirements ?? []) {
        if (!!requirement.badgeKey && !database.getBadge(requirement.badgeKey)) errors.push(`['${badge.key}:${requirement.key}'].badgeKey['${requirement.badgeKey}']`)
        if (!!requirement.missionKey && !database.getMission(requirement.missionKey)) errors.push(`['${badge.key}:${requirement.key}'].missionKey['${requirement.missionKey}']`)
        for (const [locationIndex, location] of requirement?.location?.entries() ?? []) {
          if (!!location.zoneKey && !database.getZone(location.zoneKey)) errors.push(`['${badge.key}:${requirement.key}'].location[${locationIndex}].zoneKey['${location.zoneKey}']`)
        }
      }
    }

    if (errors.length > 0) {
      throw `Some requirements have invalid links:\n${errors.join('\n')}`
    }
  })
})
