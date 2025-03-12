import { BadgeData } from 'coh-content-db'

export const VirtualExtractor: BadgeData = {
  type: 'AE',
  key: 'virtual-extractor',
  setTitle: { id: 1245 },
  name: [
    { value: 'Virtual Extractor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve rescued or kidnapped your first hostage during Test Mode, earning yourself the Virtual Extractor badge.' }],
  acquisition: 'Rescue one captive while running a Architect mission in test mode.',
  links: [
    { title: 'Virtual Extractor Badge', href: 'https://homecoming.wiki/wiki/Virtual_Extractor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtual-extractor.png' }],
}
