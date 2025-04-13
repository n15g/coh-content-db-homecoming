import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const TonyKord: ContactData = {
  key: 'tony-kord',
  name: 'Tony Kord',
  title: 'Defense Systems Entrepreneur',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [948, 38, -2204.5] },
  levelRange: [5, 14],
  links: [{ title: 'Tony Kord', href: 'https://homecoming.wiki/wiki/Tony_Kord' }],
}
