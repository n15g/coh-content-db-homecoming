import { BadgeData } from 'coh-content-db'

export const Entertainer: BadgeData = {
  type: 'EVENT',
  key: 'entertainer',
  setTitle: { id: 972 },
  name: [
    { value: 'Entertainer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped celebrate the 4th anniversary of City of Heroes/Villains.' },
  ],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
  links: [
    { title: 'Entertainer Badge', href: 'https://homecoming.wiki/wiki/Entertainer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/entertainer.png' }],
}
