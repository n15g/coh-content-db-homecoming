import { ruleTester } from '../utils/rule-tester'
import { preferSimpleAlternate } from '../../../main/lint/rules/prefer-simple-alternate'

ruleTester.run('should fix single values', preferSimpleAlternate, {
  valid: [],
  invalid: [
    {
      name: 'simple string value',
      code: `
export const Zealous: BadgeData = {
  name: [
    { value: 'Zealous' },
  ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: 'Zealous',
}`,
    },
    {
      name: 'binary expression',
      code: `
export const Zealous: BadgeData = {
  name: [
    { value: 'Zea' + 'lous' },
  ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: 'Zea' + 'lous',
}`,
    },
    {
      name: 'multiline template',
      code: `
export const Zealous: BadgeData = {
  name: [
    { value: \`Zea
lous\` },
  ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: \`Zea
lous\`,
}`,
    },
    {
      name: 'variable',
      code: `
export const Zealous: BadgeData = {
  name: [ { value: someVar } ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: someVar,
}`,
    },
    {
      name: 'function',
      code: `
export const Zealous: BadgeData = {
  name: [ { value: someFunc() } ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: someFunc(),
}`,
    },
  ],
})

ruleTester.run('should target all alternate fields', preferSimpleAlternate, {
  valid: [],
  invalid: [
    {
      name: 'name',
      code: `
export const Zealous: BadgeData = {
  name: [ { value: 'Zealous' } ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  name: 'Zealous',
}`,
    },
    {
      name: 'badgeText',
      code: `
export const Zealous: BadgeData = {
  badgeText: [ { value: 'Some text.' } ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  badgeText: 'Some text.',
}`,
    },
    {
      name: 'icon',
      code: `
export const Zealous: BadgeData = {
  icon: [ { value: 'https://nouri.com' } ],
}`,
      errors: [
        { messageId: 'replaceWithSingleValue' },
      ],
      output: `
export const Zealous: BadgeData = {
  icon: 'https://nouri.com',
}`,
    },
  ],
})

ruleTester.run('should ignore anything not relevant', preferSimpleAlternate, {
  valid: [
    {
      name: 'not BadgeData',
      code: `
export const Zealous = {
  name: [{ value: 'Zealous' }],
}`,
    },
    {
      name: 'no value',
      code: `
export const Zealous: BadgeData = {
  name: [{}],
}`,
    },
    {
      name: 'another data type',
      code: `
export const Zealous: ContactData = {
  name: [{ value: 'Zealous' }],
}`,
    },
    {
      name: 'not an alternate field',
      code: `
export const Zealous: BadgeData = {
  birthday: [{ value: 'Zealous' }],
}`,
    },
    {
      name: 'not an array',
      code: `
export const Zealous: BadgeData = {
  name: 'Zealous',
}`,
    },
    {
      name: 'not an array',
      code: `
export const Zealous: BadgeData = {
  name: someFunction(),
}`,
    },
    {
      name: 'not an array',
      code: `
export const Zealous: BadgeData = {
  name: someVar,
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should ignore multi-value alternates', preferSimpleAlternate, {
  valid: [`
export const Zealous: BadgeData = {
  name: [
    { value: 'Zealous' },
    { value: 'Even more Zealous' },
  ],
}`,
  ],
  invalid: [],
})

ruleTester.run('should ignore anything other than an object expression in the array', preferSimpleAlternate, {
  valid: [
    {
      name: 'spread',
      code: `
export const Zealous: BadgeData = {
  name: [ ...NAMES ],
}`,
    },
    {
      name: 'function',
      code: `
export const Zealous: BadgeData = {
  name: [ name() ],
}`,
    },
    {
      name: 'variable',
      code: `
export const Zealous: BadgeData = {
  name: [ someVar ],
}`,
    },
  ],
  invalid: [],
})
