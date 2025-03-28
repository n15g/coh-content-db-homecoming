import { BadgeData } from 'coh-content-db'

export const Warhead: BadgeData = {
  type: 'INVENTION',
  key: 'warhead',
  setTitle: { id: 797 },
  name: [{ value: 'Warhead' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Damage and Knockback.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Warhead Badge', href: 'https://homecoming.wiki/wiki/Warhead_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 8,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 8,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
