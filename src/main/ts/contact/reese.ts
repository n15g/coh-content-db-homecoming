import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const Reese: ContactData = {
  key: 'reese',
  name: 'Reese',
  title: `Alpha of Marauder's Top Dogs`,
  zoneKey: NovaPraetoria.key,
  loc: [-4319, 3, 1300],
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Reese' }],
}
