import * as homecoming from '../../main/ts/homecoming'
import { HOMECOMING } from '../../main/ts'
import { CohContentDatabase } from 'coh-content-db'

describe('HOMECOMING', () => {
  test('should be defined', () => {
    expect(homecoming).toHaveProperty('HOMECOMING')
  })

  test('should not be null', () => {
    expect(HOMECOMING).not.toBeNull()
  })

  test('should load into the db correctly', () => {
    new CohContentDatabase(HOMECOMING)
  })
})
