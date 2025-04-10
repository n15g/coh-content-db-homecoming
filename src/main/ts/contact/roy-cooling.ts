import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const RoyCooling: ContactData = {
  key: 'roy-cooling',
  name: 'Roy Cooling',
  title: 'FBSA Agent',
  location: { zoneKey: TalosIsland.key, coords: [-659, 160.1, 6712.1] },
  levelRange: [20, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Roy_Cooling' }],
}
