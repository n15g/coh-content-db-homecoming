import { ContactData } from 'coh-content-db'
import { UndergroundNova } from '../zone/underground-nova'

export const Ricochet: ContactData = {
  key: 'ricochet',
  name: 'Ricochet',
  title: 'Resistance freedom fighter',
  morality: 'resistance',
  location: { zoneKey: UndergroundNova.key, coords: [-4092, 508, -279] },
  levelRange: [1, 10],
  links: [{ title: 'Ricochet', href: 'https://homecoming.wiki/wiki/Ricochet' }],
}
