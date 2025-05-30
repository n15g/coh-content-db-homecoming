import { BadgeData } from 'coh-content-db'
import { Politician } from '../exploration/politician'

export const LongbowWarden: BadgeData = {
  type: 'gladiator',
  key: 'longbow-warden',
  setTitleId: [455],
  name: 'Longbow Warden',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Longbow counts you as an ally.' },
    { alignment: 'villain', value: 'Bow down and obey!' },
  ],
  links: [
    { title: 'Longbow Warden Badge', href: 'https://homecoming.wiki/wiki/Longbow_Warden_1_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Politician.key, type: 'badge', badgeKey: Politician.key },
  ],
}
