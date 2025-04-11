import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const BaneSpiderRuben: ContactData = {
  key: 'bane-spider-ruben',
  name: 'Bane Spider Ruben',
  title: 'Arachnos Liaison',
  location: { zoneKey: CapAuDiable.key, coords: [-750, 135, -291] },
  levelRange: [15, 24],
  links: [{ title: 'Bane Spider Ruben', href: 'https://homecoming.wiki/wiki/Bane_Spider_Ruben' }],
}
