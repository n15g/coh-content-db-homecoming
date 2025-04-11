import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const DrCheng: ContactData = {
  key: 'dr-cheng',
  name: 'Dr. Cheng',
  title: 'Mystic',
  location: { zoneKey: IndependencePort.key, coords: [-1835, 3, -5436] },
  levelRange: [20, 24],
  links: [{ title: 'Dr. Cheng', href: 'https://homecoming.wiki/wiki/Dr._Cheng' }],
}
