import { BadgeData } from 'coh-content-db'
import { Electrician } from '../defeat/electrician'

export const Gremlin: BadgeData = {
  type: 'gladiator',
  key: 'gremlin',
  setTitleId: [447],
  name: 'Gremlin',
  morality: 'villainous',
  badgeText: 'This living spark is a capricious sort.',
  links: [
    { title: 'Gremlin Badge', href: 'https://homecoming.wiki/wiki/Gremlin_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Electrician.key, type: 'badge', badgeKey: Electrician.key },
  ],
}
