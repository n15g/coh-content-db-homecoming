import { BadgeData } from 'coh-content-db'

export const TheUnyielding: BadgeData = {
  type: 'achievement',
  key: 'the-unyielding',
  setTitleId: [16, 1682],
  name: [
    { alignment: 'hero', value: 'The Unyielding' },
    { alignment: 'villain', value: 'Unbroken' },
    { alignment: 'praetorian', value: 'Went the Extra Mile' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Continued defeats mean nothing to you.' },
    { alignment: 'villain', value: `They can knock you down, but they can't keep you down.` },
    { alignment: 'praetorian', value: 'Because those Hospitals can be pretty far away sometimes... Despite your many, many defeats, you press on.' },
  ],
  acquisition: 'Pay off 100,000 debt.',
  links: [
    { title: 'The Unyielding Badge', href: 'https://homecoming.wiki/wiki/The_Unyielding_Badge' },
    { title: 'Unbroken Badge', href: 'https://homecoming.wiki/wiki/Unbroken_Badge' },
    { title: 'Went the Extra Mile Badge', href: 'https://homecoming.wiki/wiki/Went_the_Extra_Mile_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
