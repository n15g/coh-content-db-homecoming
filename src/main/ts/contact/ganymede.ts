import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const Ganymede: ContactData = {
  key: 'ganymede',
  name: 'Ganymede',
  title: 'Emissary of Eros',
  zoneKey: PocketD.key,
  loc: [-52, 0, -1014],
  levelRange: [1, 50],
  notes: `Only available during Valentine's events.`,
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Ganymede' }],
}
