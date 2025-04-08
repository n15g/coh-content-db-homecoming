import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const ChanceMcKnight: ContactData = {
  key: 'chance-mcknight',
  name: 'Chance McKnight',
  title: 'Undercover Ministry of Intelligence operative in the Syndicate',
  zoneKey: ImperialCity.key,
  loc: [474, -55, -295],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Chance_McKnight' }],
}
