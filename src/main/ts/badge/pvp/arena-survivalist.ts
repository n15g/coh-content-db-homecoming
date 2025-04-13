import { BadgeData } from 'coh-content-db'

export const ArenaSurvivalist: BadgeData = {
  type: 'pvp',
  key: 'arena-survivalist',
  setTitleId: [1351],
  name: 'Arena Survivalist',
  morality: 'all',
  badgeText: `You've won your first Free for All match, you're considered an Arena Survivalist.`,
  acquisition: 'Win a rated or unrated Battle Royale match in the Arena.',
  links: [
    { title: 'Arena Survivalist Badge', href: 'https://homecoming.wiki/wiki/Arena_Survivalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-survivalist.png',
}
