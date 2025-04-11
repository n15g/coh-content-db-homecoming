import { ContactData } from 'coh-content-db'
import { TheChantry } from '../zone/the-chantry'

export const FaathimTheKind: ContactData = {
  key: 'fathim-the-kind',
  name: 'Faathim the Kind',
  location: { zoneKey: TheChantry.key, coords: [-30.5, -1995, 4] },
  levelRange: [44, 50],
  links: [{ title: 'Faathim the Kind', href: 'https://homecoming.wiki/wiki/Faathim_the_Kind' }],
}
