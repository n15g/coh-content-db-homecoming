import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const Mongoose: ContactData = {
  key: 'mongoose',
  name: 'Mongoose',
  title: 'Snake Exterminator',
  zoneKey: MercyIsland.key,
  loc: [-1180, 96, -394],
  levelRange: [3, 8],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Mongoose' }],
}
