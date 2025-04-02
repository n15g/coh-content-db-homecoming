import { BadgeData } from 'coh-content-db'

export const Security: BadgeData = {
  type: 'INVENTION',
  key: 'security',
  setTitle: { id: 773 },
  name: [{ value: 'Security' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Defense Buff, Resist Damage, Intangible.' }],
  links: [
    { title: 'Security Badge', href: 'https://homecoming.wiki/wiki/Security_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 7,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 7,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
