import { BadgeData } from 'coh-content-db'

export const ArenaDuelist: BadgeData = {
  type: 'PVP',
  key: 'arena-duelist',
  setTitle: { id: 1341 },
  name: [
    { value: 'Arena Duelist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve won your first Arena Duel match, you\'re considered an Arena Duelist.' },
  ],
  acquisition: 'Win a rated or unrated Duel match in the Arena',
  links: [
    { title: 'Arena Duelist Badge', href: 'https://homecoming.wiki/wiki/Arena_Duelist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-duelist.png' },
  ],
}
