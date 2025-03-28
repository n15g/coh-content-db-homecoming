import { BadgeData } from 'coh-content-db'

export const Mender: BadgeData = {
  type: 'INVENTION',
  key: 'mender',
  setTitle: { id: 766 },
  name: [{ value: 'Mender' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Heal.' }],
  links: [
    { title: 'Mender Badge', href: 'https://homecoming.wiki/wiki/Mender_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['HEALING'],
      inventionCount: 4,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['HEALING'],
      inventionCount: 4,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
