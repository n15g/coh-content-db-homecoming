import { BadgeData } from 'coh-content-db'

export const ArmsDealer: BadgeData = {
  type: 'invention',
  key: 'arms-dealer',
  setTitleId: [798],
  name: 'Arms Dealer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Damage and Knockback.',
  links: [
    { title: 'Arms Dealer Badge', href: 'https://homecoming.wiki/wiki/Arms_Dealer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['damage', 'knockback'],
      count: 11,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['damage', 'knockback'],
      count: 11,
    },
  ],
}
