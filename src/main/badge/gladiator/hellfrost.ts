import { BadgeData } from 'coh-content-db'
import { Coldblooded } from '../defeat/coldblooded'

export const Hellfrost: BadgeData = {
  type: 'GLADIATOR',
  key: 'hellfrost',
  setTitle: { id: 462 },
  name: [
    { value: 'Hellfrost' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'This demon is amused to serve you.' },
  ],
  links: [
    { title: 'Hellfrost Badge', href: 'https://homecoming.wiki/wiki/Hellfrost_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Coldblooded.key, type: 'BADGE', badgeKey: Coldblooded.key },
  ]],
}
