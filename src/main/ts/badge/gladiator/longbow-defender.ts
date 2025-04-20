import { BadgeData } from 'coh-content-db'
import { Disruptor } from '../pvp/disruptor'

export const LongbowDefender: BadgeData = {
  type: 'gladiator',
  key: 'longbow-defender',
  setTitleId: [460],
  name: 'Longbow Defender',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Longbow counts you as an ally.' },
    { alignment: 'villain', value: 'Even the best of Longbow submit to your will.' },
  ],
  links: [
    { title: 'Longbow Defender Badge', href: 'https://homecoming.wiki/wiki/Longbow_Warden_2_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Disruptor.key, type: 'badge', badgeKey: Disruptor.key },
  ],
}
