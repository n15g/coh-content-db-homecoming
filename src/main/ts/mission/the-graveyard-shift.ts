import { MissionData } from 'coh-content-db'
import { AgentWatkins } from '../contact/agent-watkins'

export const TheGraveyardShift: MissionData = {
  key: 'the-graveyard-shift',
  name: 'The Graveyard Shift',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: AgentWatkins.key,
  levelRange: [20, 29],
  links: [
    { title: 'The Graveyard Shift', href: 'https://homecoming.wiki/wiki/Agent_Watkins#The_Graveyard_Shift' },
  ],
  flashback: {
    id: '27.01',
    levelRange: [25, 29],
  },
}
