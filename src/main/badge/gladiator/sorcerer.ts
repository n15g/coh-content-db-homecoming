import { BadgeData } from 'coh-content-db'
import { MageHunter } from '../accomplishment/mage-hunter'

export const Sorcerer: BadgeData = {
  type: 'GLADIATOR',
  key: 'sorcerer',
  setTitle: { id: 470 },
  name: [
    { value: 'Sorcerer' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The Tsoo are honored to serve you.' },
  ],
  links: [
    { title: 'Sorcerer Badge', href: 'https://homecoming.wiki/wiki/Sorcerer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: MageHunter.key, type: 'BADGE', badgeKey: MageHunter.key },
  ]],
}
