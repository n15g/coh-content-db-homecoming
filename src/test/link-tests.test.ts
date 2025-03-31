import { CohContentDatabase } from '../../../coh-content-db'
import { HOMECOMING } from '../main'

const UNSAFE_CHARACTERS = /[^a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]|%(?![0-9A-Fa-f]{2})/

const database = new CohContentDatabase(HOMECOMING)

describe('Metadata', () => {
  test('should not contain any http links', () => {
    const errors: string[] = []

    for (const link of database.metadata.links) {
      if (new URL(link.href).protocol === 'http:') errors.push(`metadata.links['${link.title}'] contains an insecure (http) link.`)
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  test('should be URL encoded', () => {
    const errors: string[] = []

    for (const link of database.metadata.links) {
      if (new URL(link.href).protocol === 'http:') errors.push(`metadata.links['${link.title}'] contains an insecure (http) link.`)
      if (UNSAFE_CHARACTERS.test(link.href)) errors.push(`metadata.links['${link.href}'] contains an unsafe URL character`)
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })
})

describe('Badge', () => {
  describe('links', () => {
    test('should not contain any http links', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        for (const link of badge.links) {
          if (new URL(link.href).protocol === 'http:') errors.push(`['${badge.key}'].links['${link.title}'] contains an insecure (http) link.`)
        }

        for (const group of badge?.requirements ?? []) {
          for (const requirement of group) {
            for (const link of requirement.links) {
              if (new URL(link.href).protocol === 'http:') errors.push(`['${badge.key}:${requirement.key}'].links['${link.title}'] contains an insecure (http) link.`)
            }
          }
        }
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })

    test('should be URL encoded', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        for (const link of badge.links) {
          if (UNSAFE_CHARACTERS.test(link.href)) errors.push(`['${badge.key}'].links['${link.href}'] contains an unsafe URL character`)
        }

        for (const group of badge.requirements ?? []) {
          for (const requirement of group) {
            for (const link of requirement.links) {
              if (UNSAFE_CHARACTERS.test(link.href)) errors.push(`['${badge}:${requirement.key}'].links['${link.href}'] contains an unsafe URL character`)
            }
          }
        }
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })
  })
})

describe('Contact', () => {
  test('should not contain any http links', () => {
    const errors: string[] = []

    for (const contact of database.contacts) {
      for (const link of contact.links) {
        if (new URL(link.href).protocol === 'http:') errors.push(`['${contact.key}'].links['${link.title}'] contains an insecure (http) link.`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  test('should be URL encoded', () => {
    const errors: string[] = []

    for (const contact of database.contacts) {
      for (const link of contact.links) {
        if (UNSAFE_CHARACTERS.test(link.href)) errors.push(`['${contact.key}'].links['${link.href}'] contains an unsafe URL character`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })
})

describe('Zone', () => {
  test('should not contain any http links', () => {
    const errors: string[] = []

    for (const zone of database.zones) {
      for (const link of zone.links) {
        if (new URL(link.href).protocol === 'http:') errors.push(`['${zone.key}'].links['${link.title}'] contains an insecure (http) link.`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  test('should be URL encoded', () => {
    const errors: string[] = []

    for (const zone of database.zones) {
      for (const link of zone.links) {
        if (new URL(link.href).protocol === 'http:') errors.push(`['${zone.key}'].links['${link.title}'] contains an insecure (http) link.`)
        if (UNSAFE_CHARACTERS.test(link.href)) errors.push(`['${zone.key}'].links['${link.href}'] contains an unsafe URL character`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })
})
