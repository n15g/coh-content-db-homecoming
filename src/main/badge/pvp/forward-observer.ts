import { BadgeData } from 'coh-content-db'

export const ForwardObserver: BadgeData = {
  type: 'PVP',
  key: 'forward-observer',
  setTitle: { id: 365 },
  name: [
    { value: 'Forward Observer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You\'ve taken down 10 villains in PvP.' },
    { alignment: 'V', value: 'You\'ve taken down 10 heroes in PvP.' },
  ],
  acquisition: 'Defeat 10 player characters in a PvP zone by your own hand',
  links: [
    { title: 'Forward Observer Badge', href: 'https://homecoming.wiki/wiki/Forward_Observer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png' },
  ],
}
