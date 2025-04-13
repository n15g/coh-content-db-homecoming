import { ContactData } from 'coh-content-db'
import { UndergroundNeutropolis } from '../zone/underground-neutropolis'

export const Helix: ContactData = {
  key: 'helix',
  name: 'Helix',
  title: 'Geneticist',
  morality: 'resistance',
  location: { zoneKey: UndergroundNeutropolis.key, coords: [301, -1200, -1492] },
  levelRange: [14, 20],
  links: [{ title: 'Helix', href: 'https://homecoming.wiki/wiki/Helix' }],
}
