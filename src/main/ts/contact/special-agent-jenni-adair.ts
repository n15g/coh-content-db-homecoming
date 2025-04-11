import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const SpecialAgentJenniAdair: ContactData = {
  key: 'special-agent-jenni-adair',
  name: 'Special Agent Jenni Adair',
  title: 'Superpowered Activities Monitoring Special Agent',
  location: { zoneKey: TalosIsland.key, coords: [-3111, 112, 9002] },
  levelRange: [20, 29],
  links: [{ title: 'Special Agent Jenni Adair', href: 'https://homecoming.wiki/wiki/Special_Agent_Jenni_Adair' }],
}
