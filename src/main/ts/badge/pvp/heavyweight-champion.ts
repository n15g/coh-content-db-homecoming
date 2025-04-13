import { BadgeData } from 'coh-content-db'

export const HeavyweightChampion: BadgeData = {
  type: 'pvp',
  key: 'heavyweight-champion',
  setTitleId: [228],
  name: 'Heavyweight Champion',
  morality: 'all',
  badgeText: `You have achieved the status of Champion in the Heavyweight division by winning your first match in this division.`,
  acquisition: 'Win an Arena event in the Heavyweight division.',
  links: [
    { title: 'Heavyweight Champion Badge', href: 'https://homecoming.wiki/wiki/Heavyweight_Champion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/heavyweight-champion.png',
}
