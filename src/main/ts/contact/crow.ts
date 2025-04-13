import { ContactData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../zone/underground-neutropolis'

export const Crow: ContactData = {
  key: 'crow',
  name: 'Crow',
  title: 'Resistance Leader',
  morality: 'resistance',
  location: { zoneKey: UndergroundNeutropolis.key, coords: [285, -1200, -1603] },
  levelRange: [14, 20],
  links: [{ title: 'Crow', href: 'https://homecoming.wiki/wiki/Crow' }],
}
