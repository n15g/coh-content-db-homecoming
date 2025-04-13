import { MissionData } from 'coh-content-db'
import { LukeLarson } from '../contact/luke-larson'

export const WhoNeedsEnemies: MissionData = {
  key: 'who-needs-enemies',
  name: 'Who Needs Enemies?',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: LukeLarson.key,
  levelRange: [8, 15],
  links: [
    { title: 'Who Needs Enemies?', href: 'https://homecoming.wiki/wiki/Luke_Larson#Who_Needs_Enemies?' },
  ],
  flashback: {
    id: '18.33',
    levelRange: [15, 19],
    morality: 'all',
  },
}
