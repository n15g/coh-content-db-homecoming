import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../main'

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
  })
})
