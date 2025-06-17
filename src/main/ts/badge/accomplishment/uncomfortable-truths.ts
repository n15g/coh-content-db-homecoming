import { BadgeData } from 'coh-content-db'
import { CuttingBackOldGrowth } from '../../mission/cutting-back-old-growth'

export const UncomfortableTruths: BadgeData = {
  type: 'accomplishment',
  key: 'uncomfortable-truths',
  setTitleId: [2565],
  name: 'Uncomfortable Truths',
  releaseDate: '2025-06-17',
  morality: 'villainous',
  badgeText: `Sometimes the only thing it takes to completely rock a person's world is to learn a few uncomfortable truths.`,
  acquisition: `Complete bonus objectives Erin West's story arc Cutting Back Old Growth.`,
  links: [
    { title: 'Uncomfortable Truths Badge', href: 'https://homecoming.wiki/wiki/Uncomfortable_Truths_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/uncomfortable-truths.png',
  requirements: [
    { key: CuttingBackOldGrowth.key, type: 'mission', missionKey: CuttingBackOldGrowth.key },
  ],
}
