import { BadgeData } from 'coh-content-db'
import { ProtectorOfInnocents } from '../achievement/protector-of-innocents'

export const NebulaEliteBuckshot: BadgeData = {
  type: 'GLADIATOR',
  key: 'nebula-elite-buckshot',
  setTitle: { id: 491 },
  name: [
    { value: 'Nebula Elite Buckshot' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'These Council will make good gladiators.' },
  ],
  links: [
    { title: 'Nebula Elite Buckshot Badge', href: 'https://homecoming.wiki/wiki/Nebula_Elite_Buckshot_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: ProtectorOfInnocents.key, type: 'BADGE', badgeKey: ProtectorOfInnocents.key },
  ]],
}
