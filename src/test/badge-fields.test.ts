import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'
import { BADGES } from '../main/badge/_badges'

const database = new CohContentDatabase(HOMECOMING)

describe('Badge Fields', () => {
  test('should have at least an acquisition or explicit requirements', () => {
    const errors: string[] = []

    for (const badge of database.badges) {
      if (!badge?.acquisition && !badge.requirements?.length) errors.push(`['${badge.key}'] lacks either acquisition or explicit requirements.`)
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  describe('name', () => {
    test('should use direct value with no alternate values', () => {
      const errors: string[] = []

      for (const badge of BADGES) {
        if (Array.isArray(badge.name) && badge.name.length === 1) errors.push(`['${badge.key}'].name only contains a single value, use a direct value instead of an array.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })

  describe('badgeText', () => {
    test('should use direct value with no alternate values', () => {
      const errors: string[] = []

      for (const badge of BADGES) {
        if (Array.isArray(badge.badgeText) && badge.badgeText.length === 1) errors.push(`['${badge.key}'].badgeText only contains a single value, use a direct value instead of an array.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })

  describe('acquisition', () => {
    test('should end with a period', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        if (badge.acquisition && !badge?.acquisition?.endsWith('.')) errors.push(`['${badge.key}'].acquisition does not end with a period.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })

  describe('effect', () => {
    test('should end with a period', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        if (badge.effect && !badge?.effect?.endsWith('.')) errors.push(`['${badge.key}'].effect does not end with a period.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })

    test(`should start with 'Awards' or 'Unlocks'`, () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        if (badge.effect && !badge?.effect?.startsWith('Awards') && !badge?.effect.startsWith('Unlocks')) errors.push(`['${badge.key}'].effect does not start with 'Awards' or 'Unlocks'.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })

  describe('icon', () => {
    test('should not contain any http links', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        for (const icon of badge.icon.canonical) {
          if (new URL(icon.value).protocol === 'http:') errors.push(`['${badge.key}'].links['${icon.value}'] contains an insecure (http) link.`)
        }
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })

    test('should use direct value with no alternate values', () => {
      const errors: string[] = []

      for (const badge of BADGES) {
        if (Array.isArray(badge.icon) && badge.icon.length === 1) errors.push(`['${badge.key}'].icon only contains a single value, use a direct value instead of an array.`)
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })
})
