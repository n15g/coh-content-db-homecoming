import { BadgeData } from 'coh-content-db'

export const MiddleweightChampion: BadgeData = {
  type: 'pvp',
  key: 'middleweight-champion',
  setTitleId: [226],
  name: 'Middleweight Champion',
  morality: 'all',
  badgeText: `You have achieved the status of Champion in the Middleweight division by winning your first match in this division.`,
  acquisition: 'Win an Arena event in the Middleweight division.',
  links: [
    { title: 'Middleweight Champion Badge', href: 'https://homecoming.wiki/wiki/Middleweight_Champion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/middleweight-champion.png',
}
