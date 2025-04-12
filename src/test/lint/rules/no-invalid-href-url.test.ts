import { ruleTester } from '../utils/rule-tester'
import { noInvalidHrefUrl } from '../../../main/lint/rules/no-invalid-href-url'

ruleTester.run('should ignore anything not relevant', noInvalidHrefUrl, {
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
      code: `const x = { banana: \`https://Totally^'Unsafe\` }`,
    },
    {
      name: 'not a string',
      code: `const x = { href: MY_HREF }`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', noInvalidHrefUrl, {
  valid: [],
  invalid: [
    {
      name: 'unsafe href',
      code: `const x = { href: 'https://Totally^Unsafe' }`,
      errors: [
        { messageId: 'error' },
      ],
      output: `const x = { href: 'https://Totally%5EUnsafe' }`,
    },
    {
      name: 'unsafe href with quote',
      code: `const x = { href: \`https://Totally%Un'safe\` }`,
      errors: [
        { messageId: 'error' },
      ],
      output: `const x = { href: \`https://Totally%25Un'safe\` }`,
    },
  ],
})
