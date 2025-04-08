import { BadgeData } from 'coh-content-db'

export const CruiserweightChampion: BadgeData = {
  type: 'pvp',
  key: 'cruiserweight-champion',
  setTitleId: [227],
  name: 'Cruiserweight Champion',
  morality: 'all',
  badgeText: 'You have achieved the status of Champion in the Cruiserweight division by winning your first '
    + 'match in this division.',
  acquisition: 'Win an Arena event in the Cruiserweight division',
  links: [
    { title: 'Cruiserweight Champion Badge', href: 'https://homecoming.wiki/wiki/Cruiserweight_Champion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cruiserweight-champion.png',
}
