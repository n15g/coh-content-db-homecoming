import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const AntiMatter: ContactData = {
  key: 'anti-matter',
  name: 'Anti-Matter',
  title: 'Ex-Praetor',
  zoneKey: Neutropolis.key,
  loc: [4691, -20, 2164],
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Anti-Matter' }],
}
