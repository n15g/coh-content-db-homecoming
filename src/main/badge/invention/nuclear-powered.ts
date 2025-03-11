import { BadgeData } from 'coh-content-db'

export const NuclearPowered: BadgeData = {
  type: 'INVENTION',
  key: 'nuclear-powered',
  setTitle: { id: 782 },
  name: [{ value: 'Nuclear Powered' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Endurance Modification and Endurance Reduction.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Nuclear Powered Badge', href: 'https://homecoming.wiki/wiki/Nuclear_Powered_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 7,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 7,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
