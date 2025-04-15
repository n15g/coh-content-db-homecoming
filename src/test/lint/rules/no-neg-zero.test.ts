import { ruleTester } from '../utils/rule-tester'
import { noNegZero } from '../../../main/lint/rules/no-neg-zero'

ruleTester.run('should ignore anything not relevant', noNegZero, {
  valid: [
    { name: 'positive zero', code: `const x = 0` },
    { name: 'in a string', code: `const x = '-0'` },
    { name: 'not a zero', code: `const x = -1` },
  ],
  invalid: [],
})

ruleTester.run('should migrate', noNegZero, {
  valid: [],
  invalid: [
    {
      name: 'in declaration',
      code: `const x = -0`,
      errors: [{ messageId: 'error' }],
      output: `const x = 0`,
    },
    {
      name: 'in object',
      code: `const x = { id: -0 }`,
      errors: [{ messageId: 'error' }],
      output: `const x = { id: 0 }`,
    },
    {
      name: 'in coords',
      code: `const x = { coords: [-0, 12, -0] }`,
      errors: [{ messageId: 'error' }, { messageId: 'error' }],
      output: `const x = { coords: [0, 12, 0] }`,
    },
  ],
})
