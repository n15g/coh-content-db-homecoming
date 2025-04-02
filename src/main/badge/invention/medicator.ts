import { BadgeData } from 'coh-content-db'

export const Medicator: BadgeData = {
  type: 'INVENTION',
  key: 'medicator',
  setTitle: { id: 765 },
  name: [{ value: 'Medicator' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Heal.' }],
  links: [
    { title: 'Medicator Badge', href: 'https://homecoming.wiki/wiki/Medicator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['HEALING'],
      inventionCount: 7,
    },
  ],
}
