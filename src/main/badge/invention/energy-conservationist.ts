import { BadgeData } from 'coh-content-db'

export const EnergyConservationist: BadgeData = {
  type: 'INVENTION',
  key: 'energy-conservationist',
  setTitle: { id: 780 },
  name: [{ value: 'Energy Conservationist' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Endurance Modification and Endurance Reduction.' }],
  links: [
    { title: 'Energy Conservationist Badge', href: 'https://homecoming.wiki/wiki/Energy_Conservationist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 9,
    },
  ],
}
