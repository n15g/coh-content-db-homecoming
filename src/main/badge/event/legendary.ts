import { BadgeData } from 'coh-content-db'

export const Legendary: BadgeData = {
  type: 'EVENT',
  key: 'legendary',
  setTitle: { id: 2460 },
  name: [
    { value: 'Legendary' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped celebrate the 17th anniversary of City of Heroes.' },
  ],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
  links: [
    { title: 'Legendary Badge', href: 'https://homecoming.wiki/wiki/Legendary_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/legendary.png' }],
}
