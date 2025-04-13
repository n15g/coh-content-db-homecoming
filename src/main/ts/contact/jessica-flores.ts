import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const JessicaFlores: ContactData = {
  key: 'jessica-flores',
  name: 'Jessica Flores',
  title: 'Idealist',
  morality: 'resistance',
  location: { zoneKey: ImperialCity.key, coords: [-1448, -13, -2074] },
  levelRange: [8, 15],
  links: [{ title: 'Jessica Flores', href: 'https://homecoming.wiki/wiki/Jessica_Flores' }],
}
