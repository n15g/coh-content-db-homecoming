import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const TobiasHansen: ContactData = {
  key: 'tobias-hansen',
  name: 'Tobias Hansen',
  title: 'Vicar',
  morality: 'heroic',
  location: { zoneKey: StrigaIsle.key, coords: [-2568, -32, -2384] },
  levelRange: [26, 29],
  links: [{ title: 'Tobias Hansen', href: 'https://homecoming.wiki/wiki/Tobias_Hansen' }],
}
