import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const AgentWatkins: ContactData = {
  key: 'agent-watkins',
  name: 'Agent Watkins',
  title: 'FBSA NetOps Agent Watkins',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2264, -84, -2575] },
  levelRange: [20, 29],
  links: [{ title: 'Agent Watkins', href: 'https://homecoming.wiki/wiki/Agent_Watkins' }],
}
