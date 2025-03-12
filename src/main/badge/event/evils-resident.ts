import { BadgeData } from 'coh-content-db'

export const EvilsResident: BadgeData = {
  type: 'EVENT',
  key: 'evils-resident',
  setTitle: { id: 1022 },
  name: [
    { value: 'Evil\'s Resident' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve defeated 25 Zombie Bosses, making your place of occupation a Home of the Dead.' },
  ],
  acquisition: 'Defeat 25 Zombie bosses during Zombie Apocalypses.',
  links: [
    { title: 'Evil\'s Resident Badge', href: 'https://homecoming.wiki/wiki/Evil%27s_Resident_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/evils-resident.png' }],
}
