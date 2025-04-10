import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const VirgilTarikoss: ContactData = {
  key: 'virgil-tarikoss',
  name: 'Virgil Tarikoss',
  title: 'Cagey Mystic',
  location: { zoneKey: CapAuDiable.key, coords: [-2800, 238, -528] },
  levelRange: [15, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Virgil_Tarikoss' }],
}
