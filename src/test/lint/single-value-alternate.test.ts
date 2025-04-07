import { RuleTester } from '@typescript-eslint/rule-tester'
import { singleValueAlternate } from '../../lint/single-value-alternate'

const ruleTester = new RuleTester()

ruleTester.run('should fix single values', singleValueAlternate, {
  valid: [
    `
export const Zealous: BadgeData = {
  name: 'Zealous',
}
    `,
  ],
  invalid: [
    {
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
  ],
})
