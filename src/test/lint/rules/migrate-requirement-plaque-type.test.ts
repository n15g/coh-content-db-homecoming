import { RuleTester } from '@typescript-eslint/rule-tester'
import { migrateRequirementPlaqueType } from '../../../main/lint/rules/migrate-requirement-plaque-type'

const ruleTester = new RuleTester()

ruleTester.run('should ignore anything not relevant', migrateRequirementPlaqueType, {
  valid: [
    {
      name: 'already migrated plaque',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'plaque'
    },
  ],
}`,
    },
    {
      name: 'already migrated pedestal',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'pedestal'
    },
  ],
}`,
    },
    {
      name: 'badge type',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'badge'
    },
  ],
}`,
    },
    {
      name: 'not BadgeData',
      code: `
export const Academic = {
  requirements: [ { type: 'PLAQUE' } ],
}`,
    },
    {
      name: 'not a literal',
      code: `
export const Academic: BadgeData = {
  requirements: [ { type: someFunc() } ],
}`,
    },
    {
      name: 'not a requirement',
      code: `
export const Academic: BadgeData = {
  cookies: [ { type: 'PLAQUE' } ],
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

ruleTester.run('should migrate an old plaque', migrateRequirementPlaqueType, {
  valid: [],
  invalid: [
    {
      name: 'plaque',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'PLAQUE',
      plaqueType: 'WALL_PLAQUE',
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate', data: { plaqueType: 'plaque' } },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'plaque',
      plaqueType: 'WALL_PLAQUE',
    },
  ],
}`,
    },
    {
      name: 'monument',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'PLAQUE',
      plaqueType: 'MONUMENT',
    },
  ],
}`,
      errors: [
        { messageId: 'plsMigrate', data: { plaqueType: 'pedestal' } },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'pedestal',
      plaqueType: 'MONUMENT',
    },
  ],
}`,
    },
  ],
})

ruleTester.run('should default to plaque if there is no old plaque type', migrateRequirementPlaqueType, {
  valid: [],
  invalid: [
    {
      name: 'plaque',
      code: `
export const Academic: BadgeData = {
  requirements: [
    {
      type: 'PLAQUE',
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
      type: 'plaque',
    },
  ],
}`,
    },
  ],
})
