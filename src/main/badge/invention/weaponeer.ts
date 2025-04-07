import { BadgeData } from 'coh-content-db'

export const Weaponeer: BadgeData = {
  type: 'invention',
  key: 'weaponeer',
  setTitleId: [796],
  name: 'Weaponeer',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Damage and Knockback.',
  links: [
    { title: 'Weaponeer Badge', href: 'https://homecoming.wiki/wiki/Weaponeer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['damage', 'knockback'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['damage', 'knockback'],
      count: 6,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
