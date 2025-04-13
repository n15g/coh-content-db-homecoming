import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const PraetorWhite: ContactData = {
  key: 'praetor-white',
  name: 'Praetor White',
  title: 'Commander of the PPD Powers Division',
  morality: 'loyalist',
  location: { zoneKey: NovaPraetoria.key, coords: [-5208, 45, -257] },
  levelRange: [1, 10],
  links: [{ title: 'Praetor White', href: 'https://homecoming.wiki/wiki/Marauder' }],
}
