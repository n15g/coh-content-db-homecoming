import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const VicGarland: ContactData = {
  key: 'vic-garland',
  name: 'Vic Garland',
  title: 'Civil Rights Activist',
  location: { zoneKey: TalosIsland.key, coords: [-1123, 160.5, 4620] },
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Vic_Garland' }],
}
