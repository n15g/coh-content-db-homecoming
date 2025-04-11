import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const ChanceMcKnight: ContactData = {
  key: 'chance-mcknight',
  name: 'Chance McKnight',
  title: 'Undercover Ministry of Intelligence operative in the Syndicate',
  location: { zoneKey: ImperialCity.key, coords: [474, -55, -295] },
  levelRange: [8, 15],
  links: [{ title: 'Chance McKnight', href: 'https://homecoming.wiki/wiki/Chance_McKnight' }],
}
