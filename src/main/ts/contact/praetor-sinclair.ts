import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const PraetorSinclair: ContactData = {
  key: 'praetor-sinclair',
  name: 'Praetor Sinclair',
  title: 'Praetor',
  zoneKey: ImperialCity.key,
  loc: [-915, 581, -1170],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Chimera' }],
}
