import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const LongJack: ContactData = {
  key: 'long-jack',
  name: 'Long Jack',
  title: 'Longshoreman',
  location: { zoneKey: StrigaIsle.key, coords: [-956, -25.5, -826.5] },
  levelRange: [20, 24],
  links: [{ title: 'Long Jack', href: 'https://homecoming.wiki/wiki/Long_Jack' }],
}
