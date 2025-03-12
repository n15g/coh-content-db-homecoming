import { BadgeData } from 'coh-content-db'

export const CruiserweightChampion: BadgeData = {
  type: 'PVP',
  key: 'cruiserweight-champion',
  setTitle: { id: 227 },
  name: [
    { value: 'Cruiserweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Cruiserweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Cruiserweight division',
  links: [
    { title: 'Cruiserweight Champion Badge', href: 'https://homecoming.wiki/wiki/Cruiserweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cruiserweight-champion.png' },
  ],
}
