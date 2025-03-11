import { BadgeData } from 'coh-content-db'

export const Lucky: BadgeData = {
  type: 'EVENT',
  key: 'lucky',
  setTitle: { id: 2002 },
  name: [
    { value: 'Lucky' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped celebrate the 7th anniversary of City of Heroes/Villains.' },
  ],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
  links: [
    { title: 'Lucky Badge', href: 'https://homecoming.wiki/wiki/Lucky_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/lucky.png' }],
}
