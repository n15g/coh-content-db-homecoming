import { BadgeData } from 'coh-content-db'

export const MysticallyPowered: BadgeData = {
  type: 'invention',
  key: 'mystically-powered',
  setTitleId: [783],
  name: [{ value: 'Mystically Powered' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Endurance Modification and Endurance Reduction.' }],
  links: [
    { title: 'Mystically Powered Badge', href: 'https://homecoming.wiki/wiki/Mystically_Powered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 9,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 9,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
