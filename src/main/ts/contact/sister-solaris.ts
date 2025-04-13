import { ContactData } from 'coh-content-db'
import { Cimerora } from '../zone/cimerora'

export const SisterSolaris: ContactData = {
  key: 'sister-solaris',
  name: 'Sister Solaris',
  title: 'Sybil Matriarch',
  morality: 'primal',
  location: { zoneKey: Cimerora.key, coords: [1232, 356, 4864] },
  levelRange: [50],
  links: [{ title: 'Sister Solaris', href: 'https://homecoming.wiki/wiki/Sister_Solaris' }],
}
