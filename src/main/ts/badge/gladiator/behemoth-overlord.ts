import { BadgeData } from 'coh-content-db'
import { DemonSlayer } from '../defeat/demon-slayer'

export const BehemothOverlord: BadgeData = {
  type: 'gladiator',
  key: 'behemoth-overlord',
  setTitleId: [503],
  name: 'Behemoth Overlord',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Even demons obey your will.',
  links: [
    { title: 'Behemoth Overlord Badge', href: 'https://homecoming.wiki/wiki/Behemoth_Overlord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: DemonSlayer.key, type: 'badge', badgeKey: DemonSlayer.key },
  ],
}
