import { BadgeData } from 'coh-content-db'

export const ForwardObserver: BadgeData = {
  type: 'pvp',
  key: 'forward-observer',
  setTitleId: [365],
  name: 'Forward Observer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've taken down 10 villains in PvP.` },
    { alignment: 'villain', value: `You've taken down 10 heroes in PvP.` },
  ],
  acquisition: 'Defeat 10 player characters in a PvP zone by your own hand.',
  links: [
    { title: 'Forward Observer Badge', href: 'https://homecoming.wiki/wiki/Forward_Observer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png',
}
