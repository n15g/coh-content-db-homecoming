import { BadgeData } from 'coh-content-db'

export const LightweightChampion: BadgeData = {
  type: 'PVP',
  key: 'lightweight-champion',
  setTitle: { id: 224 },
  name: [
    { value: 'Lightweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Lightweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Lightweight division',
  links: [
    { title: 'Lightweight Champion Badge', href: 'https://homecoming.wiki/wiki/Lightweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/lightweight-champion.png' },
  ],
}
