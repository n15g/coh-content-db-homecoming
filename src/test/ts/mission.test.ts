import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../../main/ts'

const TEST_DATABASE = new CohContentDatabase(HOMECOMING)

describe('Mission', () => {
  test('should only contain valid contacts', () => {
    const errors: string[] = []

    for (const mission of TEST_DATABASE.missions) {
      for (const contactKey of mission.contactKeys ?? []) {
        if (!TEST_DATABASE.getContact(contactKey)) errors.push(`['${mission.key}'].contactKey['${contactKey}']`)
      }
    }

    if (errors.length > 0) {
      throw `Some requirements have invalid links:\n${errors.join('\n')}`
    }
  })
})
