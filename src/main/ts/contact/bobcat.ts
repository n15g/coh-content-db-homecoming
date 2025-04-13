import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const Bobcat: ContactData = {
  key: 'bobcat',
  name: 'Bobcat',
  title: 'Lazy Cat Girl',
  morality: 'loyalist',
  location: { zoneKey: ImperialCity.key, coords: [-409, -349, -1311] },
  levelRange: [14, 20],
  links: [{ title: 'Bobcat', href: 'https://homecoming.wiki/wiki/Bobcat' }],
}
