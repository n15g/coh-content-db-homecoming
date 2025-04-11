import { ContactData } from 'coh-content-db'
import { SkywayCity } from '../zone/skyway-city'

export const Synapse: ContactData = {
  key: 'synapse',
  name: 'Synapse',
  title: 'Task Force Contact',
  location: { zoneKey: SkywayCity.key, coords: [110, -19, -5155.5] },
  levelRange: [15, 20],
  links: [{ title: 'Synapse', href: 'https://homecoming.wiki/wiki/Synapse' }],
}
