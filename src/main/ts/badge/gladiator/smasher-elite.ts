import { BadgeData } from 'coh-content-db'
import { Legionnaire } from '../defeat/legionnaire'

export const SmasherElite: BadgeData = {
  type: 'gladiator',
  key: 'smasher-elite',
  setTitleId: [493],
  name: 'Smasher Elite',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The Warriors respect those who fight.',
  links: [
    { title: 'Smasher Elite Badge', href: 'https://homecoming.wiki/wiki/Smasher_Elite_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Legionnaire.key, type: 'badge', badgeKey: Legionnaire.key },
  ],
}
