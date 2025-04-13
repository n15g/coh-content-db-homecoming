import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const Cleopatra: ContactData = {
  key: 'cleopatra',
  name: 'Cleopatra',
  title: 'PPD Liaison to the Magisterium',
  morality: 'loyalist',
  location: { zoneKey: NovaPraetoria.key, coords: [-5184, 41, -728] },
  levelRange: [1, 10],
  links: [{ title: 'Cleopatra', href: 'https://homecoming.wiki/wiki/Cleopatra' }],
}
