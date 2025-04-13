import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const IVy: ContactData = {
  key: 'ivy',
  name: 'IVy',
  title: 'Clockwork Secretary',
  morality: 'loyalist',
  location: { zoneKey: Neutropolis.key, coords: [1943, -51, -499] },
  levelRange: [14, 20],
  links: [{ title: 'IVy', href: 'https://homecoming.wiki/wiki/IVy' }],
}
