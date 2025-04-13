import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const FireWire: ContactData = {
  key: 'fire-wire',
  name: 'Fire Wire',
  title: 'Villain',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-2726, 239, 139] },
  levelRange: [1, 7],
  links: [{ title: 'Fire Wire', href: 'https://homecoming.wiki/wiki/Fire_Wire' }],
}
