import { BadgeData } from 'coh-content-db'

export const Armorer: BadgeData = {
  type: 'invention',
  key: 'armorer',
  setTitleId: [770],
  name: 'Armorer',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Defense Buff, Resist Damage, Intangible.',
  links: [
    { title: 'Armorer Badge', href: 'https://homecoming.wiki/wiki/Armorer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 7,
    },
  ],
}
