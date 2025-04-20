import { BadgeData } from 'coh-content-db'

export const Rebuilder: BadgeData = {
  type: 'invention',
  key: 'rebuilder',
  setTitleId: [767],
  name: 'Rebuilder',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Heal.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Rebuilder Badge', href: 'https://homecoming.wiki/wiki/Rebuilder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['healing'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['healing'],
      count: 6,
    },
  ],
}
