import { ContactData } from 'coh-content-db'
import { Eden } from '../zone/eden'

export const Woodsman: ContactData = {
  key: 'woodsman',
  name: 'Woodsman',
  title: 'The Woodsman',
  zoneKey: Eden.key,
  loc: [2590, 370, 3515],
  levelRange: [39, 41],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Woodsman' }],
}
