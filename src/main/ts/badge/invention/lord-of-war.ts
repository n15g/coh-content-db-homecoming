import { BadgeData } from 'coh-content-db'

export const LordOfWar: BadgeData = {
  type: 'invention',
  key: 'lord-of-war',
  setTitleId: [799],
  name: 'Lord of War',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Damage and Knockback.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'Lord of War Badge', href: 'https://homecoming.wiki/wiki/Lord_of_War_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['damage', 'knockback'],
      count: 14,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['damage', 'knockback'],
      count: 14,
    },
  ],
}
