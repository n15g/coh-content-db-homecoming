import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const Positron: ContactData = {
  key: 'positron',
  name: 'Positron',
  title: 'Dr. Raymond Keyes',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-3136, -80, -501] },
  levelRange: [10, 15],
  links: [{ title: 'Positron', href: 'https://homecoming.wiki/wiki/Positron' }],
}
