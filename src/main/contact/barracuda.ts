import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const Barracuda: ContactData = {
  key: 'barracuda',
  name: 'Barracuda',
  title: 'Strike Force Contact',
  zoneKey: Grandville.key,
  loc: [2559, -392, 1934.5],
  levelRange: [45, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Barracuda' }],
}
