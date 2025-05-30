import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const OperativeKuzmin: ContactData = {
  key: 'operative-kuzmin',
  name: 'Operative Kuzmin',
  title: 'Villain Liaison',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-1216.4, 246.4, 157] },
  levelRange: [1, 7],
  links: [{ title: 'Operative Kuzmin', href: 'https://homecoming.wiki/wiki/Operative_Kuzmin' }],
}
