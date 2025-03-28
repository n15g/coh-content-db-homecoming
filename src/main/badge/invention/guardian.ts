import { BadgeData } from 'coh-content-db'

export const Guardian: BadgeData = {
  type: 'INVENTION',
  key: 'guardian',
  setTitle: { id: 771 },
  name: [{ value: 'Guardian' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Defense Buff, Resist Damage, Intangible.' }],
  links: [
    { title: 'Guardian Badge', href: 'https://homecoming.wiki/wiki/Guardian_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 4,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 4,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
