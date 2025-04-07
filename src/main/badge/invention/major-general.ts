import { BadgeData } from 'coh-content-db'

export const MajorGeneral: BadgeData = {
  type: 'invention',
  key: 'major-general',
  setTitleId: [793],
  name: 'Major General',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Accuracy and To Hit Buff.',
  links: [
    { title: 'Major General Badge', href: 'https://homecoming.wiki/wiki/Major_General_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 11,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 11,
    },
  ],
}
