import { MissionData } from 'coh-content-db'
import { SeerMarino } from '../contact/seer-marino'

export const OhWretchedMan: MissionData = {
  key: 'oh-wretched-man',
  name: 'Oh, Wretched Man!',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: SeerMarino.key,
  levelRange: [15, 19],
  links: [
    { title: 'Oh, Wretched Man!', href: 'https://homecoming.wiki/wiki/Seer_Marino#Oh,_Wretched_Man!_(15-19)' },
  ],
  flashback: {
    id: '6.05',
    levelRange: [15, 19],
  },
}
