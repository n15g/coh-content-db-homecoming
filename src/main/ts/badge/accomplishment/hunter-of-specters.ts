import { BadgeData } from 'coh-content-db'
import { ToWhatEndForPower } from '../../mission/to-what-end-for-power'

export const HunterOfSpecters: BadgeData = {
  type: 'accomplishment',
  key: 'hunter-of-specters',
  setTitleId: [2191],
  name: 'Hunter of Specters',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You worked together with Praetor Duncan to put an end to Diabolique, who was discovered to be working together with Mot.',
  links: [
    { title: 'Hunter of Specters Badge', href: 'https://homecoming.wiki/wiki/Hunter_of_Specters_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: ToWhatEndForPower.key, type: 'mission', missionKey: ToWhatEndForPower.key },
  ],
}
