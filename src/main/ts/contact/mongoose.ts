import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const Mongoose: ContactData = {
  key: 'mongoose',
  name: 'Mongoose',
  title: 'Snake Exterminator',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-1180, 96, -394] },
  levelRange: [3, 8],
  links: [{ title: 'Mongoose', href: 'https://homecoming.wiki/wiki/Mongoose' }],
}
