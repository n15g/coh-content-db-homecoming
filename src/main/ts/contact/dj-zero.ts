import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const DJZero: ContactData = {
  key: 'dj-zero',
  name: 'DJ Zero',
  title: 'Trans Dimensional DJ',
  morality: 'all',
  location: { zoneKey: PocketD.key, coords: [-77, 22, -1057] },
  levelRange: [1, 50],
  links: [{ title: 'DJ Zero', href: 'https://homecoming.wiki/wiki/DJ_Zero' }],
}
