import { BadgeData } from 'coh-content-db'

export const Decaying: BadgeData = {
  type: 'invention',
  key: 'decaying',
  setTitleId: [761],
  name: 'Decaying',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Defense Debuff, To Hit Debuff, Taunt, and Confuse.',
  links: [
    { title: 'Decaying Badge', href: 'https://homecoming.wiki/wiki/Decaying_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 1,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['defense-debuff', 'to-hit-debuff', 'taunt', 'confuse'],
      count: 1,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
