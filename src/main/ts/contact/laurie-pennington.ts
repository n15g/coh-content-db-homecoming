import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const LauriePennington: ContactData = {
  key: 'laurie-pennington',
  name: 'Laurie Pennington',
  title: 'Freedom Corps Contact',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-1756, 32.5, -5030.5] },
  levelRange: [25, 29],
  links: [{ title: 'Laurie Pennington', href: 'https://homecoming.wiki/wiki/Laurie_Pennington' }],
}
