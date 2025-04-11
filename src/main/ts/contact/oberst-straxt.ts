import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const OberstStraxt: ContactData = {
  key: 'oberst-straxt',
  name: 'Oberst Straxt',
  title: '5th Column Oberst',
  location: { zoneKey: StrigaIsle.key, coords: [-293, -25.5, -1025] },
  levelRange: [20, 24],
  links: [{ title: 'Oberst Straxt', href: 'https://homecoming.wiki/wiki/Oberst_Straxt' }],
}
