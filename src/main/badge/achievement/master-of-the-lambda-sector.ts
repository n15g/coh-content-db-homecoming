import { BadgeData } from 'coh-content-db'

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
  acquisition: 'Earn the Synchronized, Well-Stocked, Antacid, and Lambda Looter badges',
  links: [
    { title: 'Master of the Lambda Sector Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Lambda_Sector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-lambda-sector.png' },
  ],
}
