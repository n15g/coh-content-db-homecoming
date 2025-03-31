import { ContactData } from 'coh-content-db'
import { UndergroundNova } from '../zone/underground-nova'

export const Ricochet: ContactData = {
  key: 'ricochet',
  name: 'Ricochet',
  title: 'Resistance freedom fighter',
  zoneKey: UndergroundNova.key,
  loc: [-4092, 508, -279],
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Ricochet' }],
}
