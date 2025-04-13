import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const LtHarris: ContactData = {
  key: 'lt-harris',
  name: 'Lt. Harris',
  title: 'Longbow Turncoat',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-533, 98, -1295] },
  levelRange: [1, 7],
  links: [{ title: 'Lt. Harris', href: 'https://homecoming.wiki/wiki/Lt._Harris' }],
}
