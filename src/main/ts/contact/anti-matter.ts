import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const AntiMatter: ContactData = {
  key: 'anti-matter',
  name: 'Anti-Matter',
  title: 'Ex-Praetor',
  location: { zoneKey: Neutropolis.key, coords: [4691, -20, 2164] },
  levelRange: [14, 20],
  links: [{ title: 'Anti-Matter', href: 'https://homecoming.wiki/wiki/Anti-Matter' }],
}
