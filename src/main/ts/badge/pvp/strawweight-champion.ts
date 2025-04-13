import { BadgeData } from 'coh-content-db'

export const StrawweightChampion: BadgeData = {
  type: 'pvp',
  key: 'strawweight-champion',
  setTitleId: [220],
  name: 'Strawweight Champion',
  morality: 'all',
  badgeText: `You have achieved the status of Champion in the Strawweight division by winning your first match in this division.`,
  acquisition: 'Win an Arena event in the Strawweight division.',
  links: [
    { title: 'Strawweight Champion Badge', href: 'https://homecoming.wiki/wiki/Strawweight_Champion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/strawweight-champion.png',
}
