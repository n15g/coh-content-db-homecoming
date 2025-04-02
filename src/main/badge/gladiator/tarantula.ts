import { BadgeData } from 'coh-content-db'
import { Venomous } from '../defeat/venomous'

export const Tarantula: BadgeData = {
  type: 'GLADIATOR',
  key: 'tarantula',
  setTitle: { id: 446 },
  name: [
    { value: 'Tarantula' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Who can say what motivates these creations?' },
  ],
  links: [
    { title: 'Tarantula Badge', href: 'https://homecoming.wiki/wiki/Tarantula_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Venomous.key, type: 'BADGE', badgeKey: Venomous.key },
  ],
}
