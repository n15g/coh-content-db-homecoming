import { BadgeData } from 'coh-content-db'

export const Guardian: BadgeData = {
  type: 'invention',
  key: 'guardian',
  setTitleId: [771],
  name: 'Guardian',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Defense Buff, Resist Damage, Intangible.',
  links: [
    { title: 'Guardian Badge', href: 'https://homecoming.wiki/wiki/Guardian_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 4,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 4,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
