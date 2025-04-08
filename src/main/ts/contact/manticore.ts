import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const Manticore: ContactData = {
  key: 'manticore',
  name: 'Manticore',
  title: 'Task Force Contact',
  zoneKey: Brickstown.key,
  loc: [1084, 16, -1230],
  levelRange: [30, 35],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Manticore' }],
}
