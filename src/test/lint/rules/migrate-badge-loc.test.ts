import { RuleTester } from '@typescript-eslint/rule-tester'
import { migrateBadgeLoc } from '../../../main/lint/rules/migrate-badge-loc'

const ruleTester = new RuleTester()

ruleTester.run('should ignore anything not relevant', migrateBadgeLoc, {
  valid: [
    {
      name: 'not BadgeData',
      code: `
export const Academic = {
  loc: [1, -2, 3.5],
}`,
    },
    {
      name: 'not a loc',
      code: `
export const Academic = {
  cookie: 'PLAQUE',
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', migrateBadgeLoc, {
  valid: [],
  invalid: [
    {
      name: 'all data present',
      code: `
export const Academic: BadgeData = {
  loc: [1, -2, 3.5],
  zoneKey: 'atlas-park',
  vidiotMapKey: '1',
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Academic: BadgeData = {
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: 'atlas-park', coords: [1, -2, 3.5] }, vidiotMapKey: '1' },
  ],
}`,
    },
  ],
})
