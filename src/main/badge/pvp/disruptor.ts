import { BadgeData } from 'coh-content-db'

export const Disruptor: BadgeData = {
  type: 'PVP',
  key: 'disruptor',
  setTitle: { id: 366 },
  name: [
    { value: 'Disruptor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve taken down 50 villains in PvP.' },
    { alignment: 'V', value: 'You\'ve taken down 50 heroes in PvP.' },
  ],
  acquisition: 'Defeat 50 player characters in a PvP zone by your own hand',
  links: [
    { title: 'Disruptor Badge', href: 'https://homecoming.wiki/wiki/Disruptor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png' },
  ],
}
