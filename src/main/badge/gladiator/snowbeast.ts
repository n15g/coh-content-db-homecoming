import { BadgeData } from 'coh-content-db'
import { ToyCollector } from '../event/toy-collector'

export const Snowbeast: BadgeData = {
  type: 'gladiator',
  key: 'snowbeast',
  setTitleId: [530],
  name: 'Snowbeast',
  morality: 'all',
  badgeText: 'You now can summon a Snowbeast minion in the Arena pet battles.',
  links: [
    { title: 'Snowbeast Badge', href: 'https://homecoming.wiki/wiki/Snowbeast_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: ToyCollector.key, type: 'badge', badgeKey: ToyCollector.key },
  ],
}
