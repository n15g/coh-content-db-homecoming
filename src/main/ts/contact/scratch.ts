import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const Scratch: ContactData = {
  key: 'scratch',
  name: 'Scratch',
  title: 'Guest DJ',
  location: { zoneKey: PocketD.key, coords: [-120, 0, -1085] },
  levelRange: [1, 50],
  notes: `Only available during Valentine's events.`,
  links: [{ title: 'Scratch', href: 'https://homecoming.wiki/wiki/Scratch' }],
}
