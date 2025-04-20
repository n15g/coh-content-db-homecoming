import { BadgeData } from 'coh-content-db'

export const EnergyConservationist: BadgeData = {
  type: 'invention',
  key: 'energy-conservationist',
  setTitleId: [780],
  name: 'Energy Conservationist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Endurance Modification and Endurance Reduction.',
  links: [
    { title: 'Energy Conservationist Badge', href: 'https://homecoming.wiki/wiki/Energy_Conservationist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 9,
    },
  ],
}
