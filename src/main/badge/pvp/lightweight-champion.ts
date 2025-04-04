import { BadgeData } from 'coh-content-db'

export const LightweightChampion: BadgeData = {
  type: 'pvp',
  key: 'lightweight-champion',
  setTitleId: [224],
  name: [
    { value: 'Lightweight Champion' },
  ],
  morality: 'all',
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
