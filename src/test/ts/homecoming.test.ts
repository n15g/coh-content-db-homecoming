import * as homecoming from '../../main/ts/homecoming'
import { HOMECOMING } from '../../main/ts'
import { BundleData, CohContentDatabase } from 'coh-content-db'

describe('HOMECOMING', () => {
  test('should be defined', () => {
    expect(homecoming).toHaveProperty('HOMECOMING')
  })

  test('should not be null', () => {
    expect(HOMECOMING).not.toBeNull()
  })

  test('should load into the db correctly', () => {
    const database = new CohContentDatabase(HOMECOMING)

    expect(database.header?.name).toBe('Homecoming')
    expect(database.getBadge('received-the-atlas-medallion')?.type).toBe('accolade')
  })

  test('should support export and import via JSON', () => {
    const jsonString = JSON.stringify(HOMECOMING)

    expect(jsonString).not.toBeUndefined()

    const fromJson = JSON.parse(jsonString) as BundleData
    expect(fromJson).toStrictEqual(HOMECOMING)

    const database = new CohContentDatabase(fromJson)
    expect(database.header?.name).toBe('Homecoming')
    expect(database.getBadge('received-the-atlas-medallion')?.type).toBe('accolade')
  })
})
