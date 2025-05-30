import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const RobertFlores: ContactData = {
  key: 'robert-flores',
  name: 'Robert Flores',
  title: 'Journalist',
  morality: 'resistance',
  location: { zoneKey: NovaPraetoria.key, coords: [-5955, 24, -873] },
  levelRange: [1, 10],
  links: [{ title: 'Robert Flores', href: 'https://homecoming.wiki/wiki/Robert_Flores' }],
}
