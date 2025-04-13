import { BadgeData } from 'coh-content-db'

export const Warhead: BadgeData = {
  type: 'invention',
  key: 'warhead',
  setTitleId: [797],
  name: 'Warhead',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Damage and Knockback.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Warhead Badge', href: 'https://homecoming.wiki/wiki/Warhead_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['damage', 'knockback'],
      count: 8,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['damage', 'knockback'],
      count: 8,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
