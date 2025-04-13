import { ruleTester } from '../utils/rule-tester'
import { preferAcquisitionPeriod } from '../../../main/lint/rules/prefer-acquisition-period'

ruleTester.run('should ignore anything not relevant', preferAcquisitionPeriod, {
  valid: [
    {
      name: 'valid value',
      code: `
export const Academic: BadgeData = {
  acquisition: 'An acquisition.',
}`,
    },
    {
      name: 'not BadgeData',
      code: `
export const Academic = {
  acquisition: 'An acquisition',
}`,
    },
    {
      name: 'a binary expression',
      code: `
export const Academic: BadgeData = {
  acquisition: 'An acquisition' + ' binary expression',
}`,
    },
    {
      name: 'a function',
      code: `
export const Academic: BadgeData = {
  acquisition: getAcquisition(),
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', preferAcquisitionPeriod, {
  valid: [],
  invalid: [
    {
      name: 'simple string',
      code: `
export const Academic: BadgeData = {
  acquisition: 'An acquisition',
}`,
      errors: [
        { messageId: 'error' },
      ],
      output: `
export const Academic: BadgeData = {
  acquisition: 'An acquisition.',
}`,
    },
    {
      name: 'template string',
      code: `
export const Academic: BadgeData = {
  acquisition: \`An \${missionLink(AMission)} acquisition\`,
}`,
      errors: [
        { messageId: 'error' },
      ],
      output: `
export const Academic: BadgeData = {
  acquisition: \`An \${missionLink(AMission)} acquisition.\`,
}`,
    },
  ],
})
