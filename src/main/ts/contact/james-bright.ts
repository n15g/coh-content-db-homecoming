import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const JamesBright: ContactData = {
  key: 'james-bright',
  name: 'James Bright',
  title: 'Hacker',
  morality: 'villainous',
  location: { zoneKey: CapAuDiable.key, coords: [919, -224, -1388] },
  levelRange: [10, 50],
  links: [{ title: 'James Bright', href: 'https://homecoming.wiki/wiki/James_Bright' }],
}
