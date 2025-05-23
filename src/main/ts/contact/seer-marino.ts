import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const SeerMarino: ContactData = {
  key: 'seer-marino',
  name: 'Seer Marino',
  title: 'Fortunata Seer',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-3042, 176, 1330] },
  levelRange: [15, 19],
  links: [{ title: 'Seer Marino', href: 'https://homecoming.wiki/wiki/Seer_Marino' }],
}
