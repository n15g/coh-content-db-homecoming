import { BadgeData } from 'coh-content-db'

export const Munitionist: BadgeData = {
  type: 'invention',
  key: 'munitionist',
  setTitleId: [795],
  name: [{ value: 'Munitionist' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Damage and Knockback.' }],
  links: [
    { title: 'Munitionist Badge', href: 'https://homecoming.wiki/wiki/Munitionist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['damage', 'knockback'],
      count: 10,
    },
  ],
}
