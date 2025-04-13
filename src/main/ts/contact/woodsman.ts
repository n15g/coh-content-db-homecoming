import { ContactData } from 'coh-content-db'
import { Eden } from '../zone/eden'

export const Woodsman: ContactData = {
  key: 'woodsman',
  name: 'Woodsman',
  title: 'The Woodsman',
  morality: 'heroic',
  location: { zoneKey: Eden.key, coords: [2590, 370, 3515] },
  levelRange: [39, 41],
  links: [{ title: 'Woodsman', href: 'https://homecoming.wiki/wiki/Woodsman' }],
}
