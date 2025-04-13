import { ruleTester } from '../utils/rule-tester'
import { noInvalidHrefProtocol } from '../../../main/lint/rules/no-invalid-href-protocol'

ruleTester.run('should ignore anything not relevant', noInvalidHrefProtocol, {
  valid: [
    {
      name: 'valid href',
      code: `const x = { href: 'https://nouri.com/foo/bar' }`,
    },
    {
      name: 'badge ref',
      code: `const x = { href: 'badge://badge-key' }`,
    },
    {
      name: 'not href',
      code: `const x = { banana: \`unknown://nouri.com\` }`,
    },
    {
      name: 'not a string',
      code: `const x = { href: MY_HREF }`,
    },
  ],
  invalid: [],
})

// noinspection HttpUrlsUsage
ruleTester.run('should mark', noInvalidHrefProtocol, {
  valid: [],
  invalid: [
    {
      name: 'http href',
      code: `const x = { href: 'http://nouri.com/foo/bar' }`,
      errors: [
        { messageId: 'error' },
      ],
    },
    {
      name: 'unknown protocol',
      code: `const x = { href: 'unknown://nouri.com/foo/bar' }`,
      errors: [
        { messageId: 'error' },
      ],
    },
  ],
})
