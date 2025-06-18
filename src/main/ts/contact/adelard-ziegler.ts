import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const AdelardZiegler: ContactData = {
  key: 'adelard-ziegler',
  name: 'Adelard Ziegler',
  title: 'International Intelligence Liaison',
  morality: 'heroic',
  location: { zoneKey: KallistiWharf.key, coords: [6072, 65, 1304] },
  levelRange: [40, 50],
  links: [{ title: 'Adelard Ziegler', href: 'https://homecoming.wiki/wiki/Adelard_Ziegler' }],
}
