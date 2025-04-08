import { ContactData } from 'coh-content-db'
import { UndergroundImperial } from '../zone/underground-imperial'

export const Wardog: ContactData = {
  key: 'wardog',
  name: 'Wardog',
  title: 'Resistance cell captain',
  zoneKey: UndergroundImperial.key,
  loc: [-597, 352, -3379],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Wardog' }],
}
