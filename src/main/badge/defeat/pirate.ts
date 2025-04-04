import { BadgeData } from 'coh-content-db'

export const Pirate: BadgeData = {
  type: 'defeat',
  key: 'pirate',
  setTitleId: [248],
  name: 'Pirate',
  morality: 'all',
  badgeText: 'You have bested the Spectral Pirates in battle and command their respect.',
  acquisition: 'Defeat 100 Spectral Pirates.',
  links: [
    { title: 'Pirate Badge', href: 'https://homecoming.wiki/wiki/Pirate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ghosts.png',
}
