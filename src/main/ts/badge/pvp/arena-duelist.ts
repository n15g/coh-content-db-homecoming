import { BadgeData } from 'coh-content-db'

export const ArenaDuelist: BadgeData = {
  type: 'pvp',
  key: 'arena-duelist',
  setTitleId: [1341],
  name: 'Arena Duelist',
  morality: 'all',
  badgeText: `You've won your first Arena Duel match, you're considered an Arena Duelist.`,
  acquisition: 'Win a rated or unrated Duel match in the Arena.',
  links: [
    { title: 'Arena Duelist Badge', href: 'https://homecoming.wiki/wiki/Arena_Duelist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-duelist.png',
}
