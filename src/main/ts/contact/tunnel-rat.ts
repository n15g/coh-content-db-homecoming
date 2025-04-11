import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const TunnelRat: ContactData = {
  key: 'tunnel-rat',
  name: 'Tunnel Rat',
  title: 'Human Smuggler',
  location: { zoneKey: NovaPraetoria.key, coords: [-4959, -76, 2675] },
  levelRange: [1, 10],
  links: [{ title: 'Tunnel Rat', href: 'https://homecoming.wiki/wiki/Tunnel_Rat_(Contact)' }],
}
