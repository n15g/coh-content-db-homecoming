import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const JamesBright: ContactData = {
  key: 'james-bright',
  name: 'James Bright',
  title: 'Hacker',
  location: { zoneKey: Neutropolis.key, coords: [919, -224, -1388] },
  levelRange: [10, 50],
  links: [{ title: 'James Bright', href: 'https://homecoming.wiki/wiki/James_Bright' }],
}
