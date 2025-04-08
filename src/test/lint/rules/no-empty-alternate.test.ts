import { RuleTester } from '@typescript-eslint/rule-tester'
import { noEmptyAlternate } from '../../../main/lint/rules/no-empty-alternate'

const ruleTester = new RuleTester()

ruleTester.run('should detect empty alternates', noEmptyAlternate, {
  valid: [],
  invalid: [
    {
      name: 'name',
      code: `
export const Zealous: BadgeData = {
  name: [],
}`,
      errors: [
        { messageId: 'mustHaveValue' },
      ],
    },
    {
      name: 'badgeText',
      code: `
export const Zealous: BadgeData = {
  badgeText: [],
}`,
      errors: [
        { messageId: 'mustHaveValue' },
      ],
    },
    {
      name: 'icon',
      code: `
export const Zealous: BadgeData = {
  icon: [],
}`,
      errors: [
        { messageId: 'mustHaveValue' },
      ],
    },
  ],
})

ruleTester.run('should ignore multiple-value alternates', noEmptyAlternate, {
  valid: [
    {
      name: 'not BadgeData',
      code: `
export const RiskTaker: BadgeData = {
  name: [
    { alignment: 'hero', value: 'Risk Taker' },
    { alignment: 'villain', value: 'Most Wanted' },
  ],
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should ignore anything not related', noEmptyAlternate, {
  valid: [
    {
      name: 'not BadgeData',
      code: `
export const Zealous = {
  name: [],
}`,
    },
    {
      name: 'another type',
      code: `
export const Zealous: ContactData = {
  name: [],
}`,
    },
    {
      name: 'a literal',
      code: `
export const Zealous: BadgeData = {
  name: 'Name',
}`,
    },
    {
      name: 'a function',
      code: `
export const Zealous: BadgeData = {
  name: someFunc(),
}`,
    },
  ],
  invalid: [],
})
