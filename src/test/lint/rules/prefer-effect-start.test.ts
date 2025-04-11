import { ruleTester } from '../utils/rule-tester'
import { preferEffectStart } from '../../../main/lint/rules/prefer-effect-start'

ruleTester.run('should ignore anything not relevant', preferEffectStart, {
  valid: [
    {
      name: 'valid value',
      code: `
export const Academic: BadgeData = {
  effect: 'Awards a thing.',
}`,
    },
    {
      name: 'valid value',
      code: `
export const Academic: BadgeData = {
  effect: 'Unlocks a thing.',
}`,
    },
    {
      name: 'not BadgeData',
      code: `
export const Academic = {
  effect: 'An effect',
}`,
    },
    {
      name: 'a binary expression',
      code: `
export const Academic: BadgeData = {
  effect: 'An effect' + ' binary expression',
}`,
    },
    {
      name: 'a function',
      code: `
export const Academic: BadgeData = {
  effect: getEffect(),
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should detect', preferEffectStart, {
  valid: [],
  invalid: [
    {
      name: 'simple string',
      code: `
export const Academic: BadgeData = {
  effect: 'An effect',
}`,
      errors: [
        { messageId: 'error' },
      ],
    },
  ],
})
