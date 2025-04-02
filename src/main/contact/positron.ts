import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const Positron: ContactData = {
  key: 'positron',
  name: 'Positron',
  title: 'Dr. Raymond Keyes',
  zoneKey: SteelCanyon.key,
  loc: [-3136, -80, -501],
  levelRange: [10, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Positron' }],
}
