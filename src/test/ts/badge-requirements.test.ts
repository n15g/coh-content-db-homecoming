import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../../main/ts'

const TEST_DATABASE = new CohContentDatabase()
TEST_DATABASE.load(HOMECOMING)

describe('Badge Requirements', () => {
  test('should only contain valid references', () => {
    const errors: string[] = []

    for (const badge of TEST_DATABASE.badges) {
      for (const requirement of badge.requirements ?? []) {
        if (!!requirement.badgeKey && !TEST_DATABASE.getBadge(requirement.badgeKey)) errors.push(`['${badge.key}:${requirement.key}'].badgeKey['${requirement.badgeKey}']`)
        if (!!requirement.missionKey && !TEST_DATABASE.getMission(requirement.missionKey)) errors.push(`['${badge.key}:${requirement.key}'].missionKey['${requirement.missionKey}']`)
        for (const [locationIndex, location] of requirement?.location?.entries() ?? []) {
          if (!!location.zoneKey && !TEST_DATABASE.getZone(location.zoneKey)) errors.push(`['${badge.key}:${requirement.key}'].location[${locationIndex}].zoneKey['${location.zoneKey}']`)
        }
      }
    }

    if (errors.length > 0) {
      throw `Some requirements have invalid links:\n${errors.join('\n')}`
    }
  })
})
