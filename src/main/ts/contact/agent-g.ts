import { ContactData } from 'coh-content-db'
import { Faultline } from '../zone/faultline'

export const AgentG: ContactData = {
  key: 'agent-g',
  name: 'Agent G',
  title: 'Special Agent',
  morality: 'heroic',
  location: { zoneKey: Faultline.key, coords: [260.5, -1336, 2338.5] },
  levelRange: [20, 24],
  links: [{ title: 'Agent G', href: 'https://homecoming.wiki/wiki/Agent_G' }],
}
