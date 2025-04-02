import { BadgeData } from 'coh-content-db'

export const LordOfWar: BadgeData = {
  type: 'INVENTION',
  key: 'lord-of-war',
  setTitle: { id: 799 },
  name: [{ value: 'Lord of War' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Damage and Knockback.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Lord of War Badge', href: 'https://homecoming.wiki/wiki/Lord_of_War_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 14,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 14,
    },
  ],
}
