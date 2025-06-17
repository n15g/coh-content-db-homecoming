import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const RobertKogan: ContactData = {
  key: 'robert-kogan',
  name: 'Robert Kogan',
  title: 'Nil',
  morality: 'vigilante',
  location: { zoneKey: KallistiWharf.key, coords: [1789, 57, 3436] },
  levelRange: [40, 50],
  links: [{ title: 'Robert Kogan', href: 'https://homecoming.wiki/wiki/Robert_Kogan' }],
}
