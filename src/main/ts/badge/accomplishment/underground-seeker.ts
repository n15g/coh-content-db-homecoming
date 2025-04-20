import { BadgeData } from 'coh-content-db'
import { TheUndergroundTrial } from '../../mission/the-underground-trial'

export const UndergroundSeeker: BadgeData = {
  type: 'accomplishment',
  key: 'underground-seeker',
  setTitleId: [1995],
  name: 'Underground Seeker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Underground.',
  links: [
    { title: 'Underground Seeker Badge', href: 'https://homecoming.wiki/wiki/Underground_Seeker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underground-seeker.png',
  requirements: [
    { key: TheUndergroundTrial.key, type: 'mission', missionKey: TheUndergroundTrial.key },
  ],
}
