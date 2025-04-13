import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const Television: ContactData = {
  key: 'television',
  name: 'Television',
  title: 'Television',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [3232, -458, 2363] },
  levelRange: [45, 50],
  links: [{ title: 'Television', href: 'https://homecoming.wiki/wiki/Television' }],
}
