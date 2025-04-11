import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const Ganymede: ContactData = {
  key: 'ganymede',
  name: 'Ganymede',
  title: 'Emissary of Eros',
  location: { zoneKey: PocketD.key, coords: [-52, 0, -1014] },
  levelRange: [1, 50],
  notes: `Only available during Valentine's events.`,
  links: [{ title: 'Ganymede', href: 'https://homecoming.wiki/wiki/Ganymede' }],
}
