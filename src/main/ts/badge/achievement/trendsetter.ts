import { BadgeData } from 'coh-content-db'

export const Trendsetter: BadgeData = {
  type: 'achievement',
  key: 'trendsetter',
  setTitleId: [242, 1702],
  name: [
    { value: 'Trendsetter' },
    { alignment: 'praetorian', value: 'Renowned' },
  ],
  morality: 'all',
  badgeText: [
    { value: 'People look to you as a leader.' },
    { alignment: 'praetorian', value: 'Most citizens of Praetoria have heard your name by now. Rumors abound concerning your relationship with the Emperor because of it.' },
  ],
  acquisition: 'Earn 50,000,000 influence.',
  links: [
    { title: 'Trendsetter Badge', href: 'https://homecoming.wiki/wiki/Trendsetter_Badge' },
    { title: 'Renowned Badge', href: 'https://homecoming.wiki/wiki/Renowned_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
