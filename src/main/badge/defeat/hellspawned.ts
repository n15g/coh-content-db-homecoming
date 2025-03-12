import { BadgeData } from 'coh-content-db'

export const Hellspawned: BadgeData = {
  type: 'DEFEAT',
  key: 'hellspawned',
  setTitle: { id: 1 },
  name: [
    { value: 'Hellspawned' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve whupped those Hellions, but good.' },
  ],
  acquisition: 'Defeat 50 Hellions Damned',
  links: [
    { title: 'Hellspawned Badge', href: 'https://homecoming.wiki/wiki/Hellspawned_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/hellspawned.png' },
  ],
}
