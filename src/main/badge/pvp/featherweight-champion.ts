import { BadgeData } from 'coh-content-db'

export const FeatherweightChampion: BadgeData = {
  type: 'PVP',
  key: 'featherweight-champion',
  setTitle: { id: 223 },
  name: [
    { value: 'Featherweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Featherweight division by winning your first '
        + 'match in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Featherweight division',
  links: [
    { title: 'Featherweight Champion Badge', href: 'https://homecoming.wiki/wiki/Featherweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/featherweight-champion.png' },
  ],
}
