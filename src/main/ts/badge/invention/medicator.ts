import { BadgeData } from 'coh-content-db'

export const Medicator: BadgeData = {
  type: 'invention',
  key: 'medicator',
  setTitleId: [765],
  name: 'Medicator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Heal.',
  links: [
    { title: 'Medicator Badge', href: 'https://homecoming.wiki/wiki/Medicator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
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
