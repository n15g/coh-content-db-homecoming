import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const JohnHouston: ContactData = {
  key: 'john-houston',
  name: 'John Houston',
  title: 'WSPDR Journalist',
  zoneKey: IndependencePort.key,
  loc: [-868.2, 0, -3856.4],
  levelRange: [40, 44],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/John_Houston' }],
}
