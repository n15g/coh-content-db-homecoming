import { BadgeData } from 'coh-content-db'
import { LambdaSectorTrial } from '../../mission/lambda-sector-trial'

export const LambdaLeader: BadgeData = {
  type: 'accomplishment',
  key: 'lambda-leader',
  setTitleId: [1983],
  name: 'Lambda Leader',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Lambda Sector.',
  links: [
    { title: 'Lambda Leader Badge', href: 'https://homecoming.wiki/wiki/Lambda_Leader_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lambda-leader.png',
  requirements: [
    { key: LambdaSectorTrial.key, type: 'mission', missionKey: LambdaSectorTrial.key },
  ],
}
