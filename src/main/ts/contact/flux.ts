import { ContactData } from 'coh-content-db'
import { TheHollows } from '../zone/the-hollows'

export const Flux: ContactData = {
  key: 'flux',
  name: 'Flux',
  title: 'Undercover Agent',
  morality: 'heroic',
  location: { zoneKey: TheHollows.key, coords: [47.1, 0, -4601] },
  levelRange: [5, 14],
  links: [{ title: 'Flux', href: 'https://homecoming.wiki/wiki/Flux' }],
}
