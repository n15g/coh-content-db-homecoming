import { BadgeData } from 'coh-content-db'
import { Synchronized } from './synchronized'
import { WellStocked } from './well-stocked'
import { Antacid } from './antacid'
import { LambdaLooter } from './lambda-looter'

export const MasterOfTheLambdaSector: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-lambda-sector',
  setTitle: { id: 1988 },
  name: [
    { value: 'Master of the Lambda Sector' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Lambda Sector.' },
  ],
  links: [
    { title: 'Master of the Lambda Sector Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Lambda_Sector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-lambda-sector.png' },
  ],
  requirements: [
    { key: Synchronized.key, type: 'BADGE', badgeKey: Synchronized.key },
    { key: WellStocked.key, type: 'BADGE', badgeKey: WellStocked.key },
    { key: Antacid.key, type: 'BADGE', badgeKey: Antacid.key },
    { key: LambdaLooter.key, type: 'BADGE', badgeKey: LambdaLooter.key },
  ],
}
