import { BadgeData } from 'coh-content-db'
import { Corrupter } from '../accomplishment/corrupter'

export const NemesisSoldier: BadgeData = {
  type: 'GLADIATOR',
  key: 'nemesis-soldier',
  setTitle: { id: 495 },
  name: [
    { value: 'Nemesis Soldier' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have a robotic warrior for the games.' },
  ],
  links: [
    { title: 'Nemesis Soldier Badge', href: 'https://homecoming.wiki/wiki/Nemesis_Soldier_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Corrupter.key, type: 'BADGE', badgeKey: Corrupter.key },
  ]],
}
