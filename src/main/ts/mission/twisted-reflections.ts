import { MissionData } from 'coh-content-db'
import { FieldAgentKeithNance } from '../contact/field-agent-keith-nance'

export const TwistedReflections: MissionData = {
  key: 'twisted-reflections',
  name: 'Twisted Reflections',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: FieldAgentKeithNance.key,
  levelRange: [20, 29],
  links: [
    { title: 'Twisted Reflections', href: 'https://homecoming.wiki/wiki/Field_Agent_Keith_Nance#Twisted_Reflections_(20-29)' },
  ],
  flashback: {
    id: '17.01',
    levelRange: [25, 29],
  },
}
