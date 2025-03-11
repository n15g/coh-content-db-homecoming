import { BadgeData } from 'coh-content-db'

export const Munitionist: BadgeData = {
  type: 'INVENTION',
  key: 'munitionist',
  setTitle: { id: 795 },
  name: [{ value: 'Munitionist' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Damage and Knockback.' }],
  links: [
    { title: 'Munitionist Badge', href: 'https://homecoming.wiki/wiki/Munitionist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 10,
    },
  ],
}
