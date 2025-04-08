import { RuleTester } from '@typescript-eslint/rule-tester'
import { migrateRequirementLoc } from '../../../main/lint/rules/migrate-requirement-loc'

const ruleTester = new RuleTester()

ruleTester.run('should ignore anything not relevant', migrateRequirementLoc, {
  valid: [
    {
      name: 'not BadgeData',
      code: `
export const Academic = {
  requirements: [ { loc: 'PLAQUE' } ],
}`,
    },
    {
      name: 'not a requirement',
      code: `
export const Academic: BadgeData = {
  cookies: [ { loc: [1, 2, 3] } ],
}`,
    },
    {
      name: 'requirement not an object',
      code: `
export const Academic: BadgeData = {
  requirements: [ SOME_CONSTANT ],
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', migrateRequirementLoc, {
  valid: [],
  invalid: [
    {
      name: 'array loc + string zoneKey',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      loc: [1, -2, 3.5],
      zoneKey: 'atlas-park',
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      location: { zoneKey: 'atlas-park', coords: [1, -2, 3.5] },
    },
  ],
}`,
    },
    {
      name: 'array loc + reference zoneKey',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      loc: [1, -2, 3.5],
      zoneKey: AtlasPark.key,
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      location: { zoneKey: AtlasPark.key, coords: [1, -2, 3.5] },
    },
  ],
}`,
    },
    {
      name: 'fancy loc + string zoneKey',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      loc: getLoc(abc, 123),
      zoneKey: 'atlas-park',
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      location: { zoneKey: 'atlas-park', coords: getLoc(abc, 123) },
    },
  ],
}`,
    },
    {
      name: 'missing zoneKey',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      loc: [1, 2, 3],
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      location: { zoneKey: setme, coords: [1, 2, 3] },
    },
  ],
}`,
    },
  ],
})
