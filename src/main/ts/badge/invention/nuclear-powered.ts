import { BadgeData } from 'coh-content-db'

export const NuclearPowered: BadgeData = {
  type: 'invention',
  key: 'nuclear-powered',
  setTitleId: [782],
  name: 'Nuclear Powered',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Endurance Modification and Endurance Reduction.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Nuclear Powered Badge', href: 'https://homecoming.wiki/wiki/Nuclear_Powered_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 7,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 7,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
