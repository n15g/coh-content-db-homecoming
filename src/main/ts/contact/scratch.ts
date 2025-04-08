import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const Scratch: ContactData = {
  key: 'scratch',
  name: 'Scratch',
  title: 'Guest DJ',
  zoneKey: PocketD.key,
  loc: [-120, 0, -1085],
  levelRange: [1, 50],
  notes: `Only available during Valentine's events.`,
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Scratch' }],
}
