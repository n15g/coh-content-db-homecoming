import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const DrAeon: ContactData = {
  key: 'dr-aeon',
  name: 'Dr. Aeon',
  title: 'Director of the Arachnos Quantum Structure Association',
  location: { zoneKey: CapAuDiable.key, coords: [-770, 487, -256.4] },
  levelRange: [35, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Aeon' }],
}
