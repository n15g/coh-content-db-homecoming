import { BadgeData } from 'coh-content-db'

export const Celebrant: BadgeData = {
  type: 'EVENT',
  key: 'celebrant',
  setTitle: { id: 250 },
  name: [
    { value: 'Celebrant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped celebrate the 1 year anniversary of City of Heroes.' },
  ],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
  links: [
    { title: 'Celebrant Badge', href: 'https://homecoming.wiki/wiki/Celebrant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/celebrant.png' }],
}
