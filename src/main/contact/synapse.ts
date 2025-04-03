import { ContactData } from 'coh-content-db'
import { SkywayCity } from '../zone/skyway-city'

export const Synapse: ContactData = {
  key: 'synapse',
  name: 'Synapse',
  title: 'Task Force Contact',
  zoneKey: SkywayCity.key,
  loc: [110, -19, -5155.5],
  levelRange: [15, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Synapse' }],
}
