import { ruleTester } from '../utils/rule-tester'
import { noInvalidKey } from '../../../main/lint/rules/no-invalid-key'

ruleTester.run('should ignore anything not relevant', noInvalidKey, {
  valid: [
    {
      name: 'valid key',
      code: `
export const Academic: BadgeData = {
  key: 'studio-55',
}`,
    },
    {
      name: 'not ObjectData',
      code: `
export const Academic = {
  key: 'SpOnGe bOb',
}`,
    },
    {
      name: 'not a string',
      code: `
export const Academic: BadgeData = {
  key: myKeyFunc(),
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', noInvalidKey, {
  valid: [],
  invalid: [
    {
      name: 'in BadgeData',
      code: `
export const Academic: BadgeData = {
  key: 'Invalid Key',
}`,
      errors: [
        { messageId: 'invalidKey' },
      ],
      output: `
export const Academic: BadgeData = {
  key: 'invalid-key',
}`,
    },
    {
      name: 'in ContactData',
      code: `
export const Bob: ContactData = {
  key: 'Invalid Key',
}`,
      errors: [
        { messageId: 'invalidKey' },
      ],
      output: `
export const Bob: ContactData = {
  key: 'invalid-key',
}`,
    },
  ],
})
