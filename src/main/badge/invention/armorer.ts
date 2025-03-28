import { BadgeData } from 'coh-content-db'

export const Armorer: BadgeData = {
  type: 'INVENTION',
  key: 'armorer',
  setTitle: { id: 770 },
  name: [{ value: 'Armorer' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Defense Buff, Resist Damage, Intangible.' }],
  links: [
    { title: 'Armorer Badge', href: 'https://homecoming.wiki/wiki/Armorer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 7,
    },
  ]],
}
