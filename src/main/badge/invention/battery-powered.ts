import { BadgeData } from 'coh-content-db'

export const BatteryPowered: BadgeData = {
  type: 'INVENTION',
  key: 'battery-powered',
  setTitle: { id: 781 },
  name: [{ value: 'Battery Powered' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Endurance Modification and Endurance Reduction.' }],
  links: [
    { title: 'Battery Powered Badge', href: 'https://homecoming.wiki/wiki/Battery_Powered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 6,
    },
  ],
}
