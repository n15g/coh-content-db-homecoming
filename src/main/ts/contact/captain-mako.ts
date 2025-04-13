import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const CaptainMako: ContactData = {
  key: 'captain-mako',
  name: 'Captain Mako',
  title: 'Arachnos Patron',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2754, -58.9, 845] },
  levelRange: [40, 50],
  links: [{ title: 'Captain Mako', href: 'https://homecoming.wiki/wiki/Captain_Mako' }],
}
