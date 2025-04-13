import { ContactData } from 'coh-content-db'
import { TheHollows } from '../zone/the-hollows'

export const Karsis: ContactData = {
  key: 'karsis',
  name: 'Karsis',
  title: 'Coerced Circle Mage',
  morality: 'heroic',
  location: { zoneKey: TheHollows.key, coords: [698, -32, -38.5] },
  levelRange: [12, 15],
  links: [{ title: 'Karsis', href: 'https://homecoming.wiki/wiki/Karsis' }],
}
