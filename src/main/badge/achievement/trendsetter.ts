import { BadgeData } from 'coh-content-db'

export const Trendsetter: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'trendsetter',
  setTitle: { id: 242, praetorianId: 1702 },
  name: [
    { value: 'Trendsetter' },
    { alignment: 'P', value: 'Renowned' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'People look to you as a leader.' },
    {
      alignment: 'P', value: 'Most citizens of Praetoria have heard your name by now. Rumors abound concerning your '
        + 'relationship with the Emperor because of it.',
    },
  ],
  acquisition: 'Earn 50,000,000 influence',
  links: [
    { title: 'Trendsetter Badge', href: 'https://homecoming.wiki/wiki/Trendsetter_Badge' },
    { title: 'Renowned Badge', href: 'https://homecoming.wiki/wiki/Renowned_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png' },
  ],
}
