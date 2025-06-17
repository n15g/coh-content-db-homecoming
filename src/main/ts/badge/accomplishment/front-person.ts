import { BadgeData } from 'coh-content-db'
import { CuttingBackOldGrowth } from '../../mission/cutting-back-old-growth'

export const FrontPerson: BadgeData = {
  type: 'accomplishment',
  key: 'front-person',
  setTitleId: [2561],
  name: 'Front Person',
  releaseDate: '2025-06-17',
  morality: 'villainous',
  badgeText: `When Crey needed someone to give them a good face to recover their image, they called you.`,
  acquisition: `Complete Erin West's story arc Cutting Back Old Growth.`,
  links: [
    { title: 'Front Person Badge', href: 'https://homecoming.wiki/wiki/Front_Person_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/front-person.png',
  requirements: [
    { key: CuttingBackOldGrowth.key, type: 'mission', missionKey: CuttingBackOldGrowth.key },
  ],
}
 