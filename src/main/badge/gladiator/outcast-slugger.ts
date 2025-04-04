import { BadgeData } from 'coh-content-db'
import { Weatherman } from '../defeat/weatherman'

export const OutcastSlugger: BadgeData = {
  type: 'GLADIATOR',
  key: 'outcast-slugger',
  setTitle: { id: 477 },
  name: [
    { value: 'Outcast Slugger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Outcasts are in awe of you.' },
  ],
  links: [
    { title: 'Outcast Slugger Badge', href: 'https://homecoming.wiki/wiki/Outcast_Slugger_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Weatherman.key, type: 'BADGE', badgeKey: Weatherman.key },
  ]],
}
