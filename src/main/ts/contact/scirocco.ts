import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const Scirocco: ContactData = {
  key: 'scirocco',
  name: 'Scirocco',
  title: 'Arachnos Patron',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2757, -58.9, 903] },
  levelRange: [40, 50],
  links: [{ title: 'Scirocco', href: 'https://homecoming.wiki/wiki/Scirocco' }],
}
