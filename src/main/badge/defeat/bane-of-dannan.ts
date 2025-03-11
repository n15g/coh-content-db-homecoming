import { BadgeData } from 'coh-content-db'

export const BaneOfDannan: BadgeData = {
  type: 'DEFEAT',
  key: 'bane-of-dannan',
  setTitle: { id: 433 },
  name: [
    { value: 'Bane of Dannan' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Tuatha de Dannan cannot stand before you.' },
  ],
  acquisition: 'Defeat 333 Tuatha de Dannan',
  links: [
    { title: 'Bane of Dannan Badge', href: 'https://homecoming.wiki/wiki/Bane_of_Dannan_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/bane-of-dannan.png' },
  ],
}
