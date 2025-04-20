import { BadgeData } from 'coh-content-db'
import { Haunted } from '../defeat/haunted'

export const Wraith: BadgeData = {
  type: 'gladiator',
  key: 'wraith',
  setTitleId: [504],
  name: 'Wraith',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'The dead will fight for you.',
  links: [
    { title: 'Wraith Badge', href: 'https://homecoming.wiki/wiki/Wraith_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Haunted.key, type: 'badge', badgeKey: Haunted.key },
  ],
}
