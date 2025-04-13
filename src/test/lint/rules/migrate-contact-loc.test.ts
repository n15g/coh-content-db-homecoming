import { ruleTester } from '../utils/rule-tester'
import { migrateContactLoc } from '../../../main/lint/rules/migrate-contact-loc'

ruleTester.run('should ignore anything not relevant', migrateContactLoc, {
  valid: [
    {
      name: 'not ContactData',
      code: `
export const Bob = {
  loc: [1, 2, 3],
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', migrateContactLoc, {
  valid: [],
  invalid: [
    {
      name: 'loc + zonekey',
      code: `
export const Bob: ContactData = {
  loc: [1, -2, 3.5],
  zoneKey: 'atlas-park',
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Bob: ContactData = {
  location: { zoneKey: 'atlas-park', coords: [1, -2, 3.5] },
}`,
    },
    {
      name: 'zoneKey + loc',
      code: `
export const Bob: ContactData = {
  zoneKey: 'atlas-park',
  loc: [1, -2, 3.5],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Bob: ContactData = {
  location: { zoneKey: 'atlas-park', coords: [1, -2, 3.5] },
}`,
    },
    {
      name: 'missing zoneKey',
      code: `
export const Bob: ContactData = {
  loc: [1, -2, 3.5],
}`,
      errors: [
        { messageId: 'plsMigrate' },
      ],
      output: `
export const Bob: ContactData = {
  location: { zoneKey: setme, coords: [1, -2, 3.5] },
}`,
    },
  ],
})
