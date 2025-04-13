import { ruleTester } from '../utils/rule-tester'
import { preferEffectPeriod } from '../../../main/lint/rules/prefer-effect-period'

ruleTester.run('should ignore anything not relevant', preferEffectPeriod, {
  valid: [
    {
      name: 'valid value',
      code: `
export const Academic: BadgeData = {
  effect: 'An effect.',
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

ruleTester.run('should migrate', preferEffectPeriod, {
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
      output: `
export const Academic: BadgeData = {
  effect: 'An effect.',
}`,
    },
    {
      name: 'template string',
      code: `
export const Academic: BadgeData = {
  effect: \`An \${missionLink(AMission)} effect\`,
}`,
      errors: [
        { messageId: 'error' },
      ],
      output: `
export const Academic: BadgeData = {
  effect: \`An \${missionLink(AMission)} effect.\`,
}`,
    },
  ],
})
