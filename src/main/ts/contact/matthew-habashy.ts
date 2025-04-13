import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const MatthewHabashy: ContactData = {
  key: 'matthew-habashy',
  name: 'Matthew Habashy',
  title: 'FBSA Agent',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [249, 16, -4827] },
  levelRange: [1, 7],
  links: [{ title: 'Matthew Habashy', href: 'https://homecoming.wiki/wiki/Matthew_Habashy' }],
}
