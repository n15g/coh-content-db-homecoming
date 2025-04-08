import { BadgeData } from 'coh-content-db'

export const Disruptor: BadgeData = {
  type: 'pvp',
  key: 'disruptor',
  setTitleId: [366],
  name: 'Disruptor',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You\'ve taken down 50 villains in PvP.' },
    { alignment: 'villain', value: 'You\'ve taken down 50 heroes in PvP.' },
  ],
  acquisition: 'Defeat 50 player characters in a PvP zone by your own hand',
  links: [
    { title: 'Disruptor Badge', href: 'https://homecoming.wiki/wiki/Disruptor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png',
}
