import { BadgeData } from 'coh-content-db'
import { WashedUp } from '../exploration/washed-up'

export const Mook: BadgeData = {
  type: 'GLADIATOR',
  key: 'mook',
  setTitle: { id: 438 },
  name: [
    { value: 'Mook' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Dese guys is part of your crew.' },
  ],
  links: [
    { title: 'Mook Badge', href: 'https://homecoming.wiki/wiki/Mook_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: WashedUp.key, type: 'BADGE', badgeKey: WashedUp.key },
  ],
}
