import { BadgeData } from 'coh-content-db'

export const Torchbearer: BadgeData = {
  type: 'EVENT',
  key: 'torchbearer',
  setTitle: { id: 2321 },
  name: [
    { value: 'Torchbearer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You have helped celebrate the 9th anniversary of City of Heroes.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/torchbearer.png' }],
  acquisition: 'Available for purchase from Luna in Ouroboros during the anniversary event in May.',
}
