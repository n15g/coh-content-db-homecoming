import { BadgeData } from 'coh-content-db'

export const HeavyweightChampion: BadgeData = {
  type: 'PVP',
  key: 'heavyweight-champion',
  setTitle: { id: 228 },
  name: [
    { value: 'Heavyweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Heavyweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Heavyweight division',
  links: [
    { title: 'Heavyweight Champion Badge', href: 'https://homecoming.wiki/wiki/Heavyweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/heavyweight-champion.png' },
  ],
}
