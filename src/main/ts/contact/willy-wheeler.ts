import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const WillyWheeler: ContactData = {
  key: 'willy-wheeler',
  name: 'Willy Wheeler',
  title: 'Street Fixer',
  morality: 'villainous',
  location: { zoneKey: CapAuDiable.key, coords: [828, 135, -188] },
  levelRange: [15, 19],
  links: [{ title: 'Willy Wheeler', href: 'https://homecoming.wiki/wiki/Willy_Wheeler' }],
}
