import { BadgeData } from 'coh-content-db'

export const Extractor: BadgeData = {
  type: 'AE',
  key: 'extractor',
  setTitle: { id: 1240 },
  name: [
    { value: 'Extractor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve rescued or kidnapped your first hostage during an Architect mission, earning yourself the Extractor badge.' }],
  acquisition: 'Rescue one required captive while on a Mission Architect mission.',
  links: [
    { title: 'Extractor Badge', href: 'https://homecoming.wiki/wiki/Extractor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/extractor.png' }],
}
