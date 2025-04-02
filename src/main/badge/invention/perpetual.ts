import { BadgeData } from 'coh-content-db'

export const Perpetual: BadgeData = {
  type: 'INVENTION',
  key: 'perpetual',
  setTitle: { id: 784 },
  name: [{ value: 'Perpetual' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Endurance Modification and Endurance Reduction.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Perpetual Badge', href: 'https://homecoming.wiki/wiki/Perpetual_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 12,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['ENDURANCE_MODIFICATION', 'ENDURANCE_REDUCTION'],
      inventionCount: 12,
    },
  ],
}
