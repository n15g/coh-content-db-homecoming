import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const EfficiencyExpertPither: ContactData = {
  key: 'efficiency-expert-pither',
  name: 'Efficiency Expert Pither',
  title: 'Arachnos Efficiency Expert',
  location: { zoneKey: Grandville.key, coords: [3007, 243, 1267] },
  levelRange: [45, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither' }],
}
