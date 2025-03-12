import { BadgeData } from 'coh-content-db'

export const BantamweightChampion: BadgeData = {
  type: 'PVP',
  key: 'bantamweight-champion',
  setTitle: { id: 222 },
  name: [
    { value: 'Bantamweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Bantamweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Bantamweight division',
  links: [
    { title: 'Bantamweight Champion Badge', href: 'https://homecoming.wiki/wiki/Bantamweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/bantamweight-champion.png' },
  ],
}
