import { BadgeData } from 'coh-content-db'

export const Revivifier: BadgeData = {
  type: 'INVENTION',
  key: 'revivifier',
  setTitle: { id: 768 },
  name: [{ value: 'Revivifier' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Heal.' }],
  links: [
    { title: 'Revivifier Badge', href: 'https://homecoming.wiki/wiki/Revivifier_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['HEALING'],
      inventionCount: 7,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['HEALING'],
      inventionCount: 7,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
