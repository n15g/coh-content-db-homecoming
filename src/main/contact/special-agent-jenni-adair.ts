import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const SpecialAgentJenniAdair: ContactData = {
  key: 'special-agent-jenni-adair',
  name: 'Special Agent Jenni Adair',
  title: 'Superpowered Activities Monitoring Special Agent',
  zoneKey: TalosIsland.key,
  loc: [-3111, 112, 9002],
  levelRange: [20, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Special_Agent_Jenni_Adair' }],
}
