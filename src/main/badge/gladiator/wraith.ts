import { BadgeData } from 'coh-content-db'
import { Haunted } from '../defeat/haunted'

export const Wraith: BadgeData = {
  type: 'GLADIATOR',
  key: 'wraith',
  setTitle: { id: 504 },
  name: [
    { value: 'Wraith' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The dead will fight for you.' },
  ],
  links: [
    { title: 'Wraith Badge', href: 'https://homecoming.wiki/wiki/Wraith_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Haunted.key, type: 'BADGE', badgeKey: Haunted.key },
  ]],
}
