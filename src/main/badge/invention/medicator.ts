import { BadgeData } from 'coh-content-db'

export const Medicator: BadgeData = {
  type: 'invention',
  key: 'medicator',
  setTitleId: [765],
  name: [{ value: 'Medicator' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Heal.' }],
  links: [
    { title: 'Medicator Badge', href: 'https://homecoming.wiki/wiki/Medicator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['healing'],
      count: 7,
    },
  ],
}
