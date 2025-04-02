import { BadgeData } from 'coh-content-db'
import { ToyCollector } from '../event/toy-collector'

export const Snowbeast: BadgeData = {
  type: 'GLADIATOR',
  key: 'snowbeast',
  setTitle: { id: 530 },
  name: [
    { value: 'Snowbeast' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You now can summon a Snowbeast minion in the Arena pet battles.' },
  ],
  links: [
    { title: 'Snowbeast Badge', href: 'https://homecoming.wiki/wiki/Snowbeast_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: ToyCollector.key, type: 'BADGE', badgeKey: ToyCollector.key },
  ],
}
