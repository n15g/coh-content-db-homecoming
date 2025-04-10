import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const TinaChung: ContactData = {
  key: 'tina-chung',
  name: 'Tina Chung',
  title: 'Aberrant Science Investigator',
  location: { zoneKey: FoundersFalls.key, coords: [3823, 0, 493.5] },
  levelRange: [30, 34],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Tina_Chung' }],
}
