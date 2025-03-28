import { BadgeData } from 'coh-content-db'

export const Rebuilder: BadgeData = {
  type: 'INVENTION',
  key: 'rebuilder',
  setTitle: { id: 767 },
  name: [{ value: 'Rebuilder' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Heal.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Rebuilder Badge', href: 'https://homecoming.wiki/wiki/Rebuilder_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['HEALING'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['HEALING'],
      inventionCount: 6,
    },
  ]],
}
