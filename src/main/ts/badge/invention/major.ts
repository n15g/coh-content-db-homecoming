import { BadgeData } from 'coh-content-db'

export const Major: BadgeData = {
  type: 'invention',
  key: 'major',
  setTitleId: [790],
  name: 'Major',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Accuracy and To Hit Buff.',
  links: [
    { title: 'Major Badge', href: 'https://homecoming.wiki/wiki/Major_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 10,
    },
  ],
}
