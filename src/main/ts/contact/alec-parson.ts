import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const AlecParson: ContactData = {
  key: 'alec-parson',
  name: 'Alec Parson',
  title: 'Senior Researcher at MICIR',
  morality: 'loyalist',
  location: { zoneKey: ImperialCity.key, coords: [-1440, -39, 705] },
  levelRange: [8, 15],
  links: [{ title: 'Alec Parson', href: 'https://homecoming.wiki/wiki/Alec_Parson' }],
}
