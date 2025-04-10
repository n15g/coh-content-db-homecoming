import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const DrHetzfeld: ContactData = {
  key: 'dr-hetzfeld',
  name: 'Dr. Hetzfeld',
  title: 'Mad Scientist',
  location: { zoneKey: Neutropolis.key, coords: [1800, -55, 1014] },
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Hetzfeld' }],
}
