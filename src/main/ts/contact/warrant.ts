import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const Warrant: ContactData = {
  key: 'warrant',
  name: 'Warrant',
  title: 'A Top Dog in the PPD Powers Division',
  location: { zoneKey: NovaPraetoria.key, coords: [-5675, 33, -842] },
  levelRange: [1, 9],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Warrant' }],
}
