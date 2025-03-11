import { BadgeData } from 'coh-content-db'

export const Reveler: BadgeData = {
  type: 'EVENT',
  key: 'reveler',
  setTitle: { id: 611 },
  name: [
    { value: 'Reveler' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped celebrate the 2nd anniversary of City of Heroes.' },
  ],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
  links: [
    { title: 'Reveler Badge', href: 'https://homecoming.wiki/wiki/Reveler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reveler.png' }],
}
