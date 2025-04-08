import { ContactData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../zone/underground-neutropolis'

export const Crow: ContactData = {
  key: 'crow',
  name: 'Crow',
  title: 'Resistance Leader',
  zoneKey: UndergroundNeutropolis.key,
  loc: [285, -1200, -1603],
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Crow' }],
}
