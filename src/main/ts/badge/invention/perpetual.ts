import { BadgeData } from 'coh-content-db'

export const Perpetual: BadgeData = {
  type: 'invention',
  key: 'perpetual',
  setTitleId: [784],
  name: 'Perpetual',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Endurance Modification and Endurance Reduction.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'Perpetual Badge', href: 'https://homecoming.wiki/wiki/Perpetual_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 12,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['endurance-modification', 'endurance-reduction'],
      count: 12,
    },
  ],
}
