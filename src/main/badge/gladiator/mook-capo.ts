import { BadgeData, badgeLink } from 'coh-content-db'
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
  acquisition: `Earn the ${badgeLink(StoneCold)} Badge (Mooks)`,
  links: [
    { title: 'Mook Capo Badge', href: 'https://homecoming.wiki/wiki/Mook_Capo_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
