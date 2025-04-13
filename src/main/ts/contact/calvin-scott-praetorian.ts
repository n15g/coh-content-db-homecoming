import { ContactData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../zone/underground-neutropolis'

export const CalvinScottPraetorian: ContactData = {
  key: 'calvin-scott-praetorian',
  name: 'Calvin Scott (Praetorian)',
  title: 'Resistance Leader',
  morality: 'resistance',
  location: { zoneKey: UndergroundNeutropolis.key, coords: [117, -1220, -1545] },
  levelRange: [14, 20],
  links: [{ title: 'Calvin Scott (Praetorian)', href: 'https://homecoming.wiki/wiki/Calvin_Scott_(Praetorian)' }],
}
