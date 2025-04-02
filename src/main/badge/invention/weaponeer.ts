import { BadgeData } from 'coh-content-db'

export const Weaponeer: BadgeData = {
  type: 'INVENTION',
  key: 'weaponeer',
  setTitle: { id: 796 },
  name: [{ value: 'Weaponeer' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Damage and Knockback.' }],
  links: [
    { title: 'Weaponeer Badge', href: 'https://homecoming.wiki/wiki/Weaponeer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 6,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
