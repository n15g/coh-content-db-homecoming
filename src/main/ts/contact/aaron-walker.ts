import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const AaronWalker: ContactData = {
  key: 'aaron-walker',
  name: 'Aaron Walker',
  title: 'Hacker',
  location: { zoneKey: Neutropolis.key, coords: [2878, -72, -182] },
  levelRange: [14, 20],
  links: [{ title: 'Aaron Walker', href: 'https://homecoming.wiki/wiki/Aaron_Walker' }],
}
