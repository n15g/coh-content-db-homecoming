import { ContactData } from 'coh-content-db'
import { PortOakes } from '../zone/port-oakes'

export const MrBocor: ContactData = {
  key: 'mr-bocor',
  name: 'Mr. Bocor',
  title: 'Vodoun Priest',
  location: { zoneKey: PortOakes.key, coords: [-406, 64, -43] },
  levelRange: [5, 9],
  links: [{ title: 'Mr. Bocor', href: 'https://homecoming.wiki/wiki/Mr._Bocor' }],
}
