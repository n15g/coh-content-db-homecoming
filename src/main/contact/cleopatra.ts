import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const Cleopatra: ContactData = {
  key: 'cleopatra',
  name: 'Cleopatra',
  title: 'PPD Liaison to the Magisterium',
  zoneKey: NovaPraetoria.key,
  loc: [-5184, 41, -728],
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Cleopatra' }],
}
