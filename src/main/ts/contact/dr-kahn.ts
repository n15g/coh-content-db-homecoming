import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const DrKahn: ContactData = {
  key: 'dr-kahn',
  name: 'Dr. Kahn',
  title: 'Portal Corp. Historian',
  morality: 'heroic',
  location: { zoneKey: FoundersFalls.key, coords: [1732, 0, 2482] },
  levelRange: [45, 50],
  links: [{ title: 'Dr. Kahn', href: 'https://homecoming.wiki/wiki/Dr._Kahn' }],
}
