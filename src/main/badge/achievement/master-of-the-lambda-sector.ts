import { BadgeData } from 'coh-content-db'
import { Synchronized } from './synchronized'
import { WellStocked } from './well-stocked'
import { Antacid } from './antacid'
import { LambdaLooter } from './lambda-looter'

export const MasterOfTheLambdaSector: BadgeData = {
  type: 'achievement',
  key: 'master-of-lambda-sector',
  setTitleId: [1988],
  name: 'Master of the Lambda Sector',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Lambda Sector.',
  links: [
    { title: 'Master of the Lambda Sector Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Lambda_Sector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-lambda-sector.png',
  requirements: [
    { key: Synchronized.key, type: 'badge', badgeKey: Synchronized.key },
    { key: WellStocked.key, type: 'badge', badgeKey: WellStocked.key },
    { key: Antacid.key, type: 'badge', badgeKey: Antacid.key },
    { key: LambdaLooter.key, type: 'badge', badgeKey: LambdaLooter.key },
  ],
}
