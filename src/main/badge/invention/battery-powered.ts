import { BadgeData } from 'coh-content-db'

export const BatteryPowered: BadgeData = {
  type: 'invention',
  key: 'battery-powered',
  setTitleId: [781],
  name: [{ value: 'Battery Powered' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Endurance Modification and Endurance Reduction.' }],
  links: [
    { title: 'Battery Powered Badge', href: 'https://homecoming.wiki/wiki/Battery_Powered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 6,
    },
  ],
}
