import { BadgeData } from 'coh-content-db'

export const Reinforcement: BadgeData = {
  type: 'PVP',
  key: 'reinforcement',
  setTitle: { id: 364 },
  name: [
    { value: 'Reinforcement' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve taken down 20 villains in PvP.' },
    { alignment: 'V', value: 'You\'ve taken down 20 heroes in PvP.' },
  ],
  acquisition: 'Defeat 20 player characters in a PvP zone by your own hand',
  links: [
    { title: 'Reinforcement Badge', href: 'https://homecoming.wiki/wiki/Reinforcement_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png' },
  ],
}
