import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const Citadel: ContactData = {
  key: 'citadel',
  name: 'Citadel',
  title: 'Task Force Contact',
  location: { zoneKey: TalosIsland.key, coords: [-1100, 160, 7459] },
  levelRange: [25, 30],
  links: [{ title: 'Citadel', href: 'https://homecoming.wiki/wiki/Citadel' }],
}
