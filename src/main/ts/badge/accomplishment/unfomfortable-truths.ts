import { BadgeData } from 'coh-content-db'
import { CuttingBackOldGrowth } from '../../mission/cutting-back-old-growth'

export const UnfomfortableTruths: BadgeData = {
  type: 'accomplishment',
  key: 'unfomfortable-truths',
  setTitleId: [2565],
  name: 'Unfomfortable Truths',
  releaseDate: '2025-06-??',
  morality: 'villainous',
  badgeText: `Sometimes the only thing it takes to completely rock a person's world is to learn a few uncomfortable truths.`,
  acquisition: `Complete bonus objectives Erin West's story arc Cutting Back Old Growth.`,
  links: [
    { title: 'Unfomfortable Truths Badge', href: 'https://homecoming.wiki/wiki/Unfomfortable_Truths_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/unfomfortable-truths.png',
  requirements: [
    { key: CuttingBackOldGrowth.key, type: 'mission', missionKey: CuttingBackOldGrowth.key },
  ],
}