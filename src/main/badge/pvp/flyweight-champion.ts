import { BadgeData } from 'coh-content-db'

export const FlyweightChampion: BadgeData = {
  type: 'PVP',
  key: 'flyweight-champion',
  setTitle: { id: 221 },
  name: [
    { value: 'Flyweight Champion' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have achieved the status of Champion in the Flyweight division by winning your first match '
        + 'in this division.',
    },
  ],
  acquisition: 'Win an Arena event in the Flyweight division',
  links: [
    { title: 'Flyweight Champion Badge', href: 'https://homecoming.wiki/wiki/Flyweight_Champion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/flyweight-champion.png' },
  ],
}
