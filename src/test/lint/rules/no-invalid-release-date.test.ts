import { ruleTester } from '../utils/rule-tester'
import { noInvalidReleaseDate } from '../../../main/lint/rules/no-invalid-release-date'

ruleTester.run('should ignore anything not relevant', noInvalidReleaseDate, {
  valid: [
    {
      name: 'valid release date',
      code: `
export const Academic: BadgeData = {
  releaseDate: '2025-05-05',
}`,
    },
    {
      name: 'not a literal or template',
      code: `
export const Academic: BadgeData = {
  releaseDate: new Date().toISOString(), //Don't do this...
}`,
    },
    {
      name: 'no release date',
      code: `
export const Academic: BadgeData = {
}`,
    },
    {
      name: 'not ObjectData',
      code: `
export const Academic = {
  releaseDate: 'bacon',
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should flag', noInvalidReleaseDate, {
  valid: [],
  invalid: [
    {
      name: 'in literal',
      code: `
export const Academic: BadgeData = {
  releaseDate: '2012-XX-30',
}`,
      errors: [{ messageId: 'invalid' }],
    },
    {
      name: 'in template',
      code: `
export const Academic: BadgeData = {
  releaseDate: \`2012-XX-30\`,
}`,
      errors: [{ messageId: 'invalid' }],
    },
    {
      name: 'some other date format',
      code: `
export const Academic: BadgeData = {
  releaseDate: 'Apr 3, 2090',
}`,
      errors: [{ messageId: 'invalid' }],
    },
    {
      name: 'slashes',
      code: `
export const Academic: BadgeData = {
  releaseDate: '2025/01/03',
}`,
      errors: [{ messageId: 'invalid' }],
    },
    {
      name: 'with prefix chars',
      code: `
export const Academic: BadgeData = {
  releaseDate: 'asd2012-01-30',
}`,
      errors: [{ messageId: 'invalid' }],
    },
    {
      name: 'with suffix chars',
      code: `
export const Academic: BadgeData = {
  releaseDate: '2012-01-30efg',
}`,
      errors: [{ messageId: 'invalid' }],
    },
  ],
})
