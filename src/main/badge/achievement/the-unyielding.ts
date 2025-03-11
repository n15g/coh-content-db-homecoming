import { BadgeData } from 'coh-content-db'

export const TheUnyielding: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'the-unyielding',
  setTitle: { id: 16, praetorianId: 1682 },
  name: [
    { alignment: 'H', value: 'The Unyielding' },
    { alignment: 'V', value: 'Unbroken' },
    { alignment: 'P', value: 'Went the Extra Mile' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Continued defeats mean nothing to you.' },
    { alignment: 'V', value: 'They can knock you down, but they can\'t keep you down.' },
    {
      alignment: 'P', value: 'Because those Hospitals can be pretty far away sometimes... Despite your many, many defeats, '
        + 'you press on.',
    },
  ],
  acquisition: 'Pay off 100,000 debt',
  links: [
    { title: 'The Unyielding Badge', href: 'https://homecoming.wiki/wiki/The_Unyielding_Badge' },
    { title: 'Unbroken Badge', href: 'https://homecoming.wiki/wiki/Unbroken_Badge' },
    { title: 'Went the Extra Mile Badge', href: 'https://homecoming.wiki/wiki/Went_the_Extra_Mile_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
