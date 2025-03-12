import { BadgeData } from 'coh-content-db'

export const ArenaVictor: BadgeData = {
  type: 'PVP',
  key: 'arena-victor',
  setTitle: { id: 1336 },
  name: [
    { value: 'Arena Victor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve won your first Arena match, you\'re considered an Arena Victor' },
  ],
  acquisition: 'Win any rated or unrated match in the Arena',
  links: [
    { title: 'Arena Victor Badge', href: 'https://homecoming.wiki/wiki/Arena_Victor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-victor.png' },
  ],
}
