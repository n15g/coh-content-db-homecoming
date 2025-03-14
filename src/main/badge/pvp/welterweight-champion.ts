import { BadgeData } from 'coh-content-db'

export const WelterweightChampion: BadgeData = {
  type: 'PVP',
  key: 'welterweight-champion',
  setTitle: { id: 225 },
  name: [
    { value: 'Welterweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Welterweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Welterweight division',
  links: [
    { title: 'Welterweight Champion Badge', href: 'https://homecoming.wiki/wiki/Welterweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/welterweight-champion.png' },
  ],
}
