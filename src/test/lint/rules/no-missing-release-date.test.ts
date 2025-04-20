import { ruleTester } from '../utils/rule-tester'
import { noMissingReleaseDate } from '../../../main/lint/rules/no-missing-release-date'

ruleTester.run('should ignore anything not relevant', noMissingReleaseDate, {
  valid: [
    {
      name: 'has a release date',
      code: `
export const Academic: BadgeData = {
  releaseDate: '2025-05-05',
}`,
    },
    {
      name: 'not ObjectData',
      code: `
export const Academic = {
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should add releaseDate', noMissingReleaseDate, {
  valid: [],
  invalid: [
    {
      name: 'in BadgeData',
      code: `
export const Academic: BadgeData = {
  name: 'Test',
}`,
      errors: [{ messageId: 'missingReleaseDate' }],
      output: `
export const Academic: BadgeData = {
  name: 'Test',
  releaseDate: '2012-11-30',
}`,
    },
    {
      name: 'amongst other fields',
      code: `
export const Academic: BadgeData = {
  name: 'Test',
  requirements: [],
}`,
      errors: [{ messageId: 'missingReleaseDate' }],
      output: `
export const Academic: BadgeData = {
  name: 'Test',
  releaseDate: '2012-11-30',
  requirements: [],
}`,
    },
    {
      name: 'no name to anchor to',
      code: `
export const Academic: BadgeData = {
  blah: 'Test',
}`,
      errors: [{ messageId: 'missingReleaseDate' }],
      output: `
export const Academic: BadgeData = {
  blah: 'Test',
  releaseDate: '2012-11-30',
}`,
    },
    {
      name: 'no fields',
      code: `
export const Academic: BadgeData = {
}`,
      errors: [{ messageId: 'missingReleaseDate' }],
      output: `
export const Academic: BadgeData = {
  releaseDate: '2012-11-30',
}`,
    },
  ],
})
