import { MissionData } from 'coh-content-db'
import { Seer1381 } from '../contact/seer-1381'

export const MindFreedom: MissionData = {
  key: 'mind-freedom',
  name: 'Mind Freedom',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Seer1381.key,
  levelRange: [8, 15],
  links: [
    { title: 'Mind Freedom', href: 'https://homecoming.wiki/wiki/Seer_1381#Mind_Freedom' },
  ],
  flashback: {
    id: '18.36',
    levelRange: [15, 19],
    morality: 'all',
  },
}
