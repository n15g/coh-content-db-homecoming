import { ContactData } from 'coh-content-db'
import { Phone } from '../zone/phone'

export const Max: ContactData = {
  key: 'max',
  name: 'Max',
  title: 'Malta Agent',
  zoneKey: Phone.key,
  levelRange: [50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Max' }],
}
