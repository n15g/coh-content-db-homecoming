import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const CaptainJamesHarlan: ContactData = {
  key: 'captain-james-harlan',
  name: 'Captain James Harlan',
  title: 'Respecification Trial Contact',
  morality: 'heroic',
  location: { zoneKey: FoundersFalls.key, coords: [1161, 0, 1511] },
  levelRange: [34, 50],
  links: [{ title: 'Captain James Harlan', href: 'https://homecoming.wiki/wiki/Major_Richard_Flagg' }],
}
