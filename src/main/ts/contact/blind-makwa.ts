import { ContactData } from 'coh-content-db'
import { FirstWard } from '../zone/first-ward'

export const BlindMakwa: ContactData = {
  key: 'blind-makwa',
  name: 'Blind Makwa',
  title: 'Medicine Man',
  morality: 'all',
  location: { zoneKey: FirstWard.key, coords: [-1493, 17, -533] },
  levelRange: [20, 29],
  links: [{ title: 'Blind Makwa', href: 'https://homecoming.wiki/wiki/Blind_Makwa' }],
}
