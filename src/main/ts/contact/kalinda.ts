import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const Kalinda: ContactData = {
  key: 'kalinda',
  name: 'Kalinda',
  title: 'Fortunata',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-1175, 243, -76] },
  levelRange: [1, 9],
  links: [{ title: 'Kalinda', href: 'https://homecoming.wiki/wiki/Kalinda' }],
}
