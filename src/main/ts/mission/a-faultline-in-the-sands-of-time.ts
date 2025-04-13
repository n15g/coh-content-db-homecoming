import { MissionData } from 'coh-content-db'
import { AgentG } from '../contact/agent-g'

export const AFaultlineInTheSandsOfTime: MissionData = {
  key: 'a-faultline-in-the-sands-of-time',
  name: 'A Faultline in the Sands of Time',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AgentG.key,
  levelRange: [20, 24],
  links: [
    { title: 'A Faultline in the Sands of Time', href: 'https://homecoming.wiki/wiki/Agent_G#A_Faultline_in_the_Sands_of_Time_(20-24)' },
  ],
  flashback: {
    id: '8.04',
    levelRange: [20, 24],
  },
}
