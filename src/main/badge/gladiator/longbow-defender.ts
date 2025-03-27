import { BadgeData, badgeLink } from 'coh-content-db'
import { Disruptor } from '../pvp/disruptor'

export const LongbowDefender: BadgeData = {
  type: 'GLADIATOR',
  key: 'longbow-defender',
  setTitle: { id: 460 },
  name: [
    { value: 'Longbow Defender' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Longbow counts you as an ally.' },
    { alignment: 'V', value: 'Even the best of Longbow submit to your will.' },
  ],
  acquisition: `Earn the ${badgeLink(Disruptor)} Badge (Longbow)`,
  links: [
    { title: 'Longbow Defender Badge', href: 'https://homecoming.wiki/wiki/Longbow_Warden_2_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
