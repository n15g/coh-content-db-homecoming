import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const AdaWellington: ContactData = {
  key: 'ada-wellington',
  name: 'Ada Wellington',
  title: 'Wentworth Manager',
  location: { zoneKey: KallistiWharf.key, coords: [6842, 95, 461] },
  levelRange: [40, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Ada_Wellington' }],
}
