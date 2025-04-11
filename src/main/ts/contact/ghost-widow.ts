import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const GhostWidow: ContactData = {
  key: 'ghost-widow',
  name: 'Ghost Widow',
  title: 'Arachnos Matron',
  location: { zoneKey: Grandville.key, coords: [2700, -58.9, 847] },
  levelRange: [40, 50],
  links: [{ title: 'Ghost Widow', href: 'https://homecoming.wiki/wiki/Ghost_Widow' }],
}
