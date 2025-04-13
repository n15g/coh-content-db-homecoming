import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const DmitriKrylov: ContactData = {
  key: 'dmitri-krylov',
  name: 'Dmitri Krylov',
  title: 'Metahuman Researcher',
  morality: 'villainous',
  location: { zoneKey: CapAuDiable.key, coords: [2878, -72, -182] },
  levelRange: [10, 14],
  links: [{ title: 'Dmitri Krylov', href: 'https://homecoming.wiki/wiki/Dmitri_Krylov' }],
}
