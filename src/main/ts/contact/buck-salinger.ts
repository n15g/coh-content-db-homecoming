import { ContactData } from 'coh-content-db'
import { Croatoa } from '../zone/croatoa'

export const BuckSalinger: ContactData = {
  key: 'buck-salinger',
  name: 'Buck Salinger',
  title: 'Midnight Squad Researcher',
  location: { zoneKey: Croatoa.key, coords: [-2094, -30, 291] },
  levelRange: [30, 34],
  links: [{ title: 'Buck Salinger', href: 'https://homecoming.wiki/wiki/Buck_Salinger' }],
}
