import { ContactData } from 'coh-content-db'
import { Faultline } from '../zone/faultline'

export const AgentG: ContactData = {
  key: 'agent-g',
  name: 'Agent G',
  title: 'Special Agent',
  zoneKey: Faultline.key,
  loc: [260.5, -1336, 2338.5],
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Agent_G' }],
}
