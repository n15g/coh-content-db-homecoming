import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const MrGPraetorian: ContactData = {
  key: 'mr-g-praetorian',
  name: 'Mr. G (Praetorian)',
  title: 'Advisor',
  location: { zoneKey: ImperialCity.key, coords: [-717, -56, 197] },
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Mr._G' }],
}
