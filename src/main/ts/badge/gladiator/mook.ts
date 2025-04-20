import { BadgeData } from 'coh-content-db'
import { WashedUp } from '../exploration/washed-up'

export const Mook: BadgeData = {
  type: 'gladiator',
  key: 'mook',
  setTitleId: [438],
  name: 'Mook',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Dese guys is part of your crew.',
  links: [
    { title: 'Mook Badge', href: 'https://homecoming.wiki/wiki/Mook_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: WashedUp.key, type: 'badge', badgeKey: WashedUp.key },
  ],
}
