import { BadgeData } from 'coh-content-db'

export const ArenaSurvivalist: BadgeData = {
  type: 'PVP',
  key: 'arena-survivalist',
  setTitle: { id: 1351 },
  name: [
    { value: 'Arena Survivalist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve won your first Free for All match, you\'re considered an Arena Survivalist.' },
  ],
  acquisition: 'Win a rated or unrated Battle Royale match in the Arena',
  links: [
    { title: 'Arena Survivalist Badge', href: 'https://homecoming.wiki/wiki/Arena_Survivalist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-survivalist.png' },
  ],
}
