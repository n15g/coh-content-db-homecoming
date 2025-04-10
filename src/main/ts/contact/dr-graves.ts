import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const DrGraves: ContactData = {
  key: 'dr-graves',
  name: 'Dr. Graves',
  title: 'The Eternal Surgeon',
  location: { zoneKey: MercyIsland.key, coords: [-1066, 239, -9] },
  levelRange: [3, 8],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Graves' }],
}
