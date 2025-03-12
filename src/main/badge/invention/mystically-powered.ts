import { BadgeData } from 'coh-content-db'

export const MysticallyPowered: BadgeData = {
  type: 'INVENTION',
  key: 'mystically-powered',
  setTitle: { id: 783 },
  name: [{ value: 'Mystically Powered' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Endurance Modification and Endurance Reduction.' }],
  links: [
    { title: 'Mystically Powered Badge', href: 'https://homecoming.wiki/wiki/Mystically_Powered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 9,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 9,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
