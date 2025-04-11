import { ruleTester } from '../utils/rule-tester'
import { migrateContactLinkTitle } from '../../../main/lint/rules/migrate-contact-link-title'

ruleTester.run('should ignore anything not relevant', migrateContactLinkTitle, {
  valid: [
    {
      name: 'not ContactData',
      code: `
export const Bob = {
  links: [{ title: 'Homecoming Wiki', href: 'https://nouri.com' } ],
}`,
    },
  ],
  invalid: [],
})

ruleTester.run('should migrate', migrateContactLinkTitle, {
  valid: [],
  invalid: [
    {
      name: 'invalid link',
      code: `
export const Bob: ContactData = {
  name: 'Bob',
  links: [{ title: 'Homecoming Wiki', href: 'https://nouri.com' } ],
}`,
      errors: [
        { messageId: 'error', data: { contactName: `'Bob'` } },
      ],
      output: `
export const Bob: ContactData = {
  name: 'Bob',
  links: [{ title: 'Bob', href: 'https://nouri.com' } ],
}`,
    },
    {
      name: 'no name for some reason',
      code: `
export const Bob: ContactData = {
  links: [{ title: 'Homecoming Wiki', href: 'https://nouri.com' } ],
}`,
      errors: [
        { messageId: 'error', data: { contactName: 'setme' } },
      ],
      output: `
export const Bob: ContactData = {
  links: [{ title: setme, href: 'https://nouri.com' } ],
}`,
    },
  ],
})
