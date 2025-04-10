import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const Manticore: ContactData = {
  key: 'manticore',
  name: 'Manticore',
  title: 'Task Force Contact',
  location: { zoneKey: Brickstown.key, coords: [1084, 16, -1230] },
  levelRange: [30, 35],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Manticore' }],
}
