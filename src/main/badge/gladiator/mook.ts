import { BadgeData, badgeLink } from 'coh-content-db'
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
  acquisition: `Earn the ${badgeLink(WashedUp)} Badge (Mooks)`,
  links: [
    { title: 'Mook Badge', href: 'https://homecoming.wiki/wiki/Mook_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
