import { BadgeData } from 'coh-content-db'
import { ZoeTaskForce } from '../../mission/zoe-task-force'

export const HeartOfGold: BadgeData = {
  type: 'accomplishment',
  key: 'heart-of-gold',
  setTitleId: [2574],
  name: 'Heart of Gold',
  releaseDate: '2025-11-30',
  morality: 'any',
  badgeText: `You teamed up with Marigold 'Zoe' Langston and her Gold Brickers to confront a plot by Nemesis to steal Langston Corp's latest portal science technology. Seizing the opportunity to deal a major blow to the Prussian Prince of Automatons, you put his Kallisti Wharf base of operations out of commission once and for all.`,
  links: [
    { title: 'Heart of Gold Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Gold_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/heart-of-gold.png',
  requirements: [
    { key: ZoeTaskForce.key, type: 'mission', missionKey: ZoeTaskForce.key },
  ],
}