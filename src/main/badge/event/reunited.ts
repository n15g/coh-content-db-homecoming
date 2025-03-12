import { BadgeData } from 'coh-content-db'

export const Reunited: BadgeData = {
  type: 'EVENT',
  key: 'reunited',
  setTitle: { id: 2510 },
  name: [
    { value: 'Reunited' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have helped celebrate the 20th anniversary of City of Heroes.` },
  ],
  acquisition: `Awarded upon login during May 2024, and thereafter available for purchase from Luna in Ouroboros during the anniversary event in May.`,
  links: [
    { title: 'Reunited Badge', href: 'https://homecoming.wiki/wiki/Reunited_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reunited.png' }],
}
