import { BadgeData } from 'coh-content-db'

export const Venomous: BadgeData = {
  type: 'DEFEAT',
  key: 'venomous',
  setTitle: { id: 538 },
  name: [
    { value: 'Venomous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve taken down so many Toxic Tarantulas that people call you Venomous.' },
  ],
  acquisition: 'Defeat 50 Arachnos Toxic Tarantulas',
  links: [
    { title: 'Venomous Badge', href: 'https://homecoming.wiki/wiki/Venomous_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/arachnos.png' },
  ],
}
