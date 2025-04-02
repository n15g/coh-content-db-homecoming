import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const MrG: ContactData = {
  key: 'mr-g',
  name: 'Mr. G',
  title: 'Advisor',
  zoneKey: ImperialCity.key,
  loc: [-717, -56, 197],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Mr._G' }],
}
