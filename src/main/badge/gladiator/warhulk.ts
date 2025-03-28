import { BadgeData } from 'coh-content-db'
import { Meteorologist } from '../accomplishment/meteorologist'

export const Warhulk: BadgeData = {
  type: 'GLADIATOR',
  key: 'warhulk',
  setTitle: { id: 502 },
  name: [
    { value: 'Warhulk' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'The Warhulks will fight as your gladiators -- for now.' },
  ],
  links: [
    { title: 'Warhulk Badge', href: 'https://homecoming.wiki/wiki/Warhulk_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Meteorologist.key, type: 'BADGE', badgeKey: Meteorologist.key },
  ]],
}
