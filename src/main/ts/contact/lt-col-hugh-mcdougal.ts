import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const LtColHughMcDougal: ContactData = {
  key: 'lt-col-hugh-mcdougal',
  name: 'Lt. Col. Hugh McDougal',
  title: 'Army Super-Powered Relations Officer',
  location: { zoneKey: TalosIsland.key, coords: [205, 160, 5085] },
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Lt._Col._Hugh_McDougal' }],
}
