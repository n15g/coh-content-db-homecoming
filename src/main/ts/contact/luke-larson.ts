import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const LukeLarson: ContactData = {
  key: 'luke-larson',
  name: 'Luke Larson',
  title: 'Public Official, for the people',
  location: { zoneKey: ImperialCity.key, coords: [-1884, -56, -891] },
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Luke_Larson' }],
}
