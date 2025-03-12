import { BadgeData } from 'coh-content-db'

export const DoubleFeature: BadgeData = {
  type: 'EVENT',
  key: 'double-feature',
  setTitle: { id: 2242 },
  name: [
    { value: 'Double Feature' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Summer Blockbuster Double Feature.' },
  ],
  acquisition: 'Complete both the \'Time Gladiator\' and \'Casino Heist\' parts of the Summer Blockbuster Event.',
  links: [
    { title: 'Double Feature Badge', href: 'https://homecoming.wiki/wiki/Double_Feature_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/double-feature.png' }],
}
