import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const AaronThiery: ContactData = {
  key: 'aaron-thiery',
  name: 'Aaron Thiery',
  title: 'SERAPH Scientist',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [2702, -32, 240] },
  levelRange: [1, 7],
  links: [{ title: 'Aaron Thiery', href: 'https://homecoming.wiki/wiki/Aaron_Thiery' }],
}
