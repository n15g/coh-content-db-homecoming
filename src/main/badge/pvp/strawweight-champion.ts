import { BadgeData } from 'coh-content-db'

export const StrawweightChampion: BadgeData = {
  type: 'PVP',
  key: 'strawweight-champion',
  setTitle: { id: 220 },
  name: [
    { value: 'Strawweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Strawweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Strawweight division',
  links: [
    { title: 'Strawweight Champion Badge', href: 'https://homecoming.wiki/wiki/Strawweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/strawweight-champion.png' },
  ],
}
