import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const WillyWheeler: ContactData = {
  key: 'willy-wheeler',
  name: 'Willy Wheeler',
  title: 'Street Fixer',
  zoneKey: CapAuDiable.key,
  loc: [828, 135, -188],
  levelRange: [15, 19],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Willy_Wheeler' }],
}
