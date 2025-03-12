import { BadgeData } from 'coh-content-db'

export const ColdFront: BadgeData = {
  type: 'EVENT',
  key: 'cold-front',
  setTitle: { id: 705 },
  name: [
    { value: 'Cold Front' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'A winter cold front has been forecast.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Cold Front Badge', href: 'https://homecoming.wiki/wiki/Cold_Front_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-front.png' }],
}
