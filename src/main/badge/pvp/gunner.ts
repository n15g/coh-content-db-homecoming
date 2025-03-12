import { BadgeData } from 'coh-content-db'

export const Gunner: BadgeData = {
  type: 'PVP',
  key: 'gunner',
  setTitle: { id: 370 },
  name: [
    { value: 'Gunner' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have been part of taking over a Firebase, earning you a new nickname: \'Gunner.\'' },
  ],
  acquisition: 'Deactivate a firebase in Bloody Bay',
  links: [
    { title: 'Gunner Badge', href: 'https://homecoming.wiki/wiki/Gunner_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/gunner.png' },
  ],
}
