import { MissionData } from 'coh-content-db'
import { SpecialAgentJenniAdair } from '../contact/special-agent-jenni-adair'

export const LookingThroughTheGlass: MissionData = {
  key: 'looking-through-the-glass',
  name: 'Looking Through the Glass',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: SpecialAgentJenniAdair.key,
  levelRange: [20, 29],
  links: [
    { title: 'Looking Through the Glass', href: 'https://homecoming.wiki/wiki/Special_Agent_Jenni_Adair#Looking_Through_the_Glass_(20-29)' },
  ],
  flashback: {
    id: '17.02',
    levelRange: [25, 29],
  },
}
