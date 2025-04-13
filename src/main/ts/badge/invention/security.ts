import { BadgeData } from 'coh-content-db'

export const Security: BadgeData = {
  type: 'invention',
  key: 'security',
  setTitleId: [773],
  name: 'Security',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Defense Buff, Resist Damage, Intangible.',
  links: [
    { title: 'Security Badge', href: 'https://homecoming.wiki/wiki/Security_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 7,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 7,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
