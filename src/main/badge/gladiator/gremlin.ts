import { BadgeData } from 'coh-content-db'
import { Electrician } from '../defeat/electrician'

export const Gremlin: BadgeData = {
  type: 'GLADIATOR',
  key: 'gremlin',
  setTitle: { id: 447 },
  name: [
    { value: 'Gremlin' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'This living spark is a capricious sort.' },
  ],
  links: [
    { title: 'Gremlin Badge', href: 'https://homecoming.wiki/wiki/Gremlin_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Electrician.key, type: 'BADGE', badgeKey: Electrician.key },
  ]],
}
