import { BadgeData } from 'coh-content-db'

export const General: BadgeData = {
  type: 'invention',
  key: 'general',
  setTitleId: [794],
  name: 'General',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Accuracy and To Hit Buff.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'General Badge', href: 'https://homecoming.wiki/wiki/General_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 14,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 14,
    },
  ],
}
