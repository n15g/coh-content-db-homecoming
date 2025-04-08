import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const Bobcat: ContactData = {
  key: 'bobcat',
  name: 'Bobcat',
  title: 'Lazy Cat Girl',
  zoneKey: ImperialCity.key,
  loc: [-409, -349, -1311],
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Bobcat' }],
}
