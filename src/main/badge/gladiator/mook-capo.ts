import { BadgeData } from 'coh-content-db'
import { StoneCold } from '../accomplishment/stone-cold'

export const MookCapo: BadgeData = {
  type: 'GLADIATOR',
  key: 'mook-capo',
  setTitle: { id: 456 },
  name: [
    { value: 'Mook Capo' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Da Mooks are on your side.' },
  ],
  links: [
    { title: 'Mook Capo Badge', href: 'https://homecoming.wiki/wiki/Mook_Capo_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: StoneCold.key, type: 'BADGE', badgeKey: StoneCold.key },
  ],
}
