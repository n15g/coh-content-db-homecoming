import { BadgeData } from 'coh-content-db'
import { StoneCold } from '../accomplishment/stone-cold'

export const MookCapo: BadgeData = {
  type: 'gladiator',
  key: 'mook-capo',
  setTitleId: [456],
  name: 'Mook Capo',
  morality: 'villainous',
  badgeText: 'Da Mooks are on your side.',
  links: [
    { title: 'Mook Capo Badge', href: 'https://homecoming.wiki/wiki/Mook_Capo_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: StoneCold.key, type: 'badge', badgeKey: StoneCold.key },
  ],
}
