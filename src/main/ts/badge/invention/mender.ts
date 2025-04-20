import { BadgeData } from 'coh-content-db'

export const Mender: BadgeData = {
  type: 'invention',
  key: 'mender',
  setTitleId: [766],
  name: 'Mender',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Heal.',
  links: [
    { title: 'Mender Badge', href: 'https://homecoming.wiki/wiki/Mender_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['healing'],
      count: 4,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['healing'],
      count: 4,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
