import { BadgeData } from 'coh-content-db'

export const ArmsDealer: BadgeData = {
  type: 'INVENTION',
  key: 'arms-dealer',
  setTitle: { id: 798 },
  name: [{ value: 'Arms Dealer' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Damage and Knockback.' }],
  links: [
    { title: 'Arms Dealer Badge', href: 'https://homecoming.wiki/wiki/Arms_Dealer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 11,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['DAMAGE', 'KNOCKBACK'],
      inventionCount: 11,
    },
  ]],
}
