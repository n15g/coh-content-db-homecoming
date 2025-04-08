import { ContactData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../zone/underground-neutropolis'

export const Helix: ContactData = {
  key: 'helix',
  name: 'Helix',
  title: 'Geneticist',
  zoneKey: UndergroundNeutropolis.key,
  loc: [301, -1200, -1492],
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Helix' }],
}
