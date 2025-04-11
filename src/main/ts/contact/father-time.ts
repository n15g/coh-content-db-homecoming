import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const FatherTime: ContactData = {
  key: 'father-time',
  name: 'Father Time',
  title: 'Auld Lang Syne',
  location: { zoneKey: PocketD.key, coords: [858.5, 148, -983.5] },
  levelRange: [1, 50],
  notes: `Only available during Winter events.`,
  links: [{ title: 'Father Time', href: 'https://homecoming.wiki/wiki/Father_Time' }],
}
