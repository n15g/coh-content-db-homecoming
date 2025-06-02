import { BadgeData } from 'coh-content-db'
import { CuttingBackOldGrowth } from '../../mission/cutting-back-old-growth'

export const TruthSeeker: BadgeData = {
  type: 'accomplishment',
  key: 'truth-seeker',
  setTitleId: [2566],
  name: 'Truth Seeker',
  releaseDate: '2025-06-??',
  morality: 'villainous',
  badgeText: `No mystery is too small to intrigue you. You gave Erin West closure by uncovering the truth about her mentor's death.`,
  acquisition: `Complete bonus objectives Erin West's story arc Cutting Back Old Growth.`,
  links: [
    { title: 'Truth Seeker Badge', href: 'https://homecoming.wiki/wiki/Truth_Seeker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/truth-seeker.png',
  requirements: [
    { key: CuttingBackOldGrowth.key, type: 'mission', missionKey: CuttingBackOldGrowth.key },
  ],
}
