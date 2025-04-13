import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const LorenzoTate: ContactData = {
  key: 'lorenzo-tate',
  name: 'Lorenzo Tate',
  title: 'Arms Dealer',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [2567, 0, -4971] },
  levelRange: [25, 29],
  links: [{ title: 'Lorenzo Tate', href: 'https://homecoming.wiki/wiki/Lorenzo_Tate' }],
}
