import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const InterrogatorKang: ContactData = {
  key: 'interrogator-kang',
  name: 'Interrogator Kang',
  title: 'Interrogator',
  zoneKey: ImperialCity.key,
  loc: [-2233, -30, 255],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Interrogator_Kang' }],
}
