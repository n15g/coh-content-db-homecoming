import { MissionData } from 'coh-content-db'
import { ErinWest } from '../contact/erin-west'

export const CuttingBackOldGrowth: MissionData = {
  key: 'cutting-back-old-growth',
  name: 'Mergers and Acquisitions',
  type: 'story-arc',
  morality: 'rogue',
  contactKeys: ErinWest.key,
  levelRange: [40, 50],
  links: [
    { title: 'Cutting Back Old Growth', href: 'https://homecoming.wiki/wiki/Erin_West#Cutting_Back_Old_Growth' },
  ],
  flashback: {
    id: '28.03',
    levelRange: [50],
  },
}
