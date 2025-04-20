import { BadgeData } from 'coh-content-db'
import { Venomous } from '../defeat/venomous'

export const Tarantula: BadgeData = {
  type: 'gladiator',
  key: 'tarantula',
  setTitleId: [446],
  name: 'Tarantula',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Who can say what motivates these creations?',
  links: [
    { title: 'Tarantula Badge', href: 'https://homecoming.wiki/wiki/Tarantula_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Venomous.key, type: 'badge', badgeKey: Venomous.key },
  ],
}
