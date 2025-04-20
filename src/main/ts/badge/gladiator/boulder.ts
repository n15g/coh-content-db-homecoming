import { BadgeData } from 'coh-content-db'
import { Liberator } from '../accomplishment/liberator'

export const Boulder: BadgeData = {
  type: 'gladiator',
  key: 'boulder',
  setTitleId: [488],
  name: 'Boulder',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have might over nature itself.',
  links: [
    { title: 'Boulder Badge', href: 'https://homecoming.wiki/wiki/Boulder_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Liberator.key, type: 'badge', badgeKey: Liberator.key },
  ],
}
