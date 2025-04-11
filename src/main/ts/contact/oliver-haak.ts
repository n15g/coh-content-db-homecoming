import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const OliverHaak: ContactData = {
  key: 'oliver-haak',
  name: 'Oliver Haak',
  title: 'Occultist',
  location: { zoneKey: TalosIsland.key, coords: [-940, 160, 5110] },
  levelRange: [20, 24],
  links: [{ title: 'Oliver Haak', href: 'https://homecoming.wiki/wiki/Oliver_Haak' }],
}
