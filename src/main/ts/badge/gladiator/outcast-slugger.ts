import { BadgeData } from 'coh-content-db'
import { Weatherman } from '../defeat/weatherman'

export const OutcastSlugger: BadgeData = {
  type: 'gladiator',
  key: 'outcast-slugger',
  setTitleId: [477],
  name: 'Outcast Slugger',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The Outcasts are in awe of you.',
  links: [
    { title: 'Outcast Slugger Badge', href: 'https://homecoming.wiki/wiki/Outcast_Slugger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Weatherman.key, type: 'badge', badgeKey: Weatherman.key },
  ],
}
