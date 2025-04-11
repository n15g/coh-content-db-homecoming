import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const Seer1381: ContactData = {
  key: 'seer-1381',
  name: 'Seer 1381',
  title: 'Unwilling Seer',
  location: { zoneKey: ImperialCity.key, coords: [-861, 213, 2290] },
  levelRange: [8, 15],
  links: [{ title: 'Seer 1381', href: 'https://homecoming.wiki/wiki/Seer_1381' }],
}
