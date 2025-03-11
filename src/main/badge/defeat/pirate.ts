import { BadgeData } from 'coh-content-db'

export const Pirate: BadgeData = {
  type: 'DEFEAT',
  key: 'pirate',
  setTitle: { id: 248 },
  name: [
    { value: 'Pirate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have bested the Spectral Pirates in battle and command their respect.' },
  ],
  acquisition: 'Defeat 100 Spectral Pirates.',
  links: [
    { title: 'Pirate Badge', href: 'https://homecoming.wiki/wiki/Pirate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ghosts.png' },
  ],
}
