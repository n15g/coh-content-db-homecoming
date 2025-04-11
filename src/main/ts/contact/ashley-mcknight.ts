import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const AshleyMcKnight: ContactData = {
  key: 'ashley-mcknight',
  name: 'Ashley McKnight',
  title: 'Midnight Squad Member',
  location: { zoneKey: CapAuDiable.key, coords: [728, 15.5, -1630] },
  levelRange: [14, 50],
  links: [{ title: 'Ashley McKnight', href: 'https://homecoming.wiki/wiki/Ashley_McKnight' }],
}
