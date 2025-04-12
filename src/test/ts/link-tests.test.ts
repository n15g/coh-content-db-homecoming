import { CohContentDatabase } from 'coh-content-db'
import { HOMECOMING } from '../../main/ts'
import { isValidProtocol, isValidUrl } from '../../main/ts/utils/uri-utils'

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

  test('should not contain any unsupported protocols', () => {
    const errors: string[] = []

    for (const link of database.metadata.links) {
      if (!isValidProtocol(link.href)) errors.push(`metadata.links['${link.href}'] contains an unsupported protocol.`)
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  test('should be URL encoded', () => {
    const errors: string[] = []

    for (const link of database.metadata.links) {
      if (new URL(link.href).protocol === 'http:') errors.push(`metadata.links['${link.title}'] contains an insecure (http) link.`)
      if (!isValidUrl(link.href)) errors.push(`metadata.links['${link.href}'] contains an unsafe URL character`)
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

        for (const requirement of badge?.requirements ?? []) {
          for (const link of requirement.links) {
            if (new URL(link.href).protocol === 'http:') errors.push(`['${badge.key}:${requirement.key}'].links['${link.title}'] contains an insecure (http) link.`)
          }
        }
      }

      if (errors.length > 0) {
        throw errors.join('\n')
      }
    })

    test('should not contain any unsupported protocols', () => {
      const errors: string[] = []

      for (const badge of database.badges) {
        for (const link of badge.links) {
          if (!isValidProtocol(link.href)) errors.push(`['${badge.key}'].links['${link.href}'] contains an unsupported protocol.`)
        }

        for (const requirement of badge?.requirements ?? []) {
          for (const link of requirement.links) {
            if (!isValidProtocol(link.href)) errors.push(`['${badge.key}:${requirement.key}'].links['${link.href}'] contains an unsupported protocol.`)
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
          if (!isValidUrl(link.href)) errors.push(`['${badge.key}'].links['${link.href}'] contains an unsafe URL character.`)
        }

        for (const requirement of badge.requirements ?? []) {
          for (const link of requirement.links) {
            if (!isValidUrl(link.href)) errors.push(`['${badge.key}:${requirement.key}'].links['${link.href}'] contains an unsafe URL character.`)
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

  test('should not contain any http links', () => {
    const errors: string[] = []

    for (const contact of database.contacts) {
      for (const link of contact.links) {
        if (!isValidProtocol(link.href)) errors.push(`links['${link.href}'] contains an unsupported protocol.`)
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
        if (!isValidUrl(link.href)) errors.push(`['${contact.key}'].links['${link.href}'] contains an unsafe URL character.`)
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
        if (new URL(link.href).protocol === 'http:') errors.push(`['${zone.key}'].links['${link.href}'] contains an insecure (http) link.`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })

  test('should not contain any unsupported protocols', () => {
    const errors: string[] = []

    for (const zone of database.zones) {
      for (const link of zone.links) {
        if (!isValidUrl(link.href)) errors.push(`['${zone.key}'].links['${link.href}'] contains an unsafe URL character.`)
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
        if (!isValidUrl(link.href)) errors.push(`['${zone.key}'].links['${link.href}'] contains an unsafe URL character`)
      }
    }

    if (errors.length > 0) {
      throw errors.join('\n')
    }
  })
})
