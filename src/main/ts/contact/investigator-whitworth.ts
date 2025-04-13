import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const InvestigatorWhitworth: ContactData = {
  key: 'investigator-whitworth',
  name: 'Investigator Whitworth',
  title: 'Investigator for MICIR',
  morality: 'loyalist',
  location: { zoneKey: ImperialCity.key, coords: [-128, 127, 183] },
  levelRange: [8, 15],
  links: [{ title: 'Investigator Whitworth', href: 'https://homecoming.wiki/wiki/Investigator_Whitworth' }],
}
