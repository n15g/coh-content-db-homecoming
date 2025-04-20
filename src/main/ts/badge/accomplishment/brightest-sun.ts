import { BadgeData } from 'coh-content-db'
import { TheShiningStarsBigLeagues } from '../../mission/the-shining-stars-big-leagues'

export const BrightestSun: BadgeData = {
  type: 'accomplishment',
  key: 'brightest-sun',
  setTitleId: [2015],
  name: 'Brightest Sun',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You and your friends have uncovered a Praetorian plot in Galaxy City, which may strike closer to home than you thought.',
  links: [
    { title: 'Brightest Sun Badge', href: 'https://homecoming.wiki/wiki/Brightest_Sun_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brightest-sun.png',
  requirements: [
    { key: TheShiningStarsBigLeagues.key, type: 'mission', missionKey: TheShiningStarsBigLeagues.key },
  ],
}
