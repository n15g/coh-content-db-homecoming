import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const StevenSheridan: ContactData = {
  key: 'steven-sheridan',
  name: 'Steven Sheridan',
  title: 'Scientist',
  location: { zoneKey: Brickstown.key, coords: [255, 0, 1425] },
  levelRange: [35, 39],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Steven_Sheridan' }],
}
