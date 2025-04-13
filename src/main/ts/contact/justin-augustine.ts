import { ContactData } from 'coh-content-db'
import { TheChantry } from '../zone/the-chantry'

export const JustinAugustine: ContactData = {
  key: 'justin-augustine',
  name: 'Justin Augustine',
  title: 'Supernatural Investigator',
  morality: 'heroic',
  location: { zoneKey: TheChantry.key, coords: [8776, 1537, -5293.5] },
  levelRange: [40, 50],
  links: [{ title: 'Justin Augustine', href: 'https://homecoming.wiki/wiki/Justin_Augustine' }],
}
