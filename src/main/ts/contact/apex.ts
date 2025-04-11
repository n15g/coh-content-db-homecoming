import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const Apex: ContactData = {
  key: 'apex',
  name: 'Apex',
  title: 'Vanguard Commander',
  location: { zoneKey: RiktiWarZone.key, coords: [-215, 40, -2265] },
  levelRange: [50],
  links: [{ title: 'Apex', href: 'https://homecoming.wiki/wiki/Apex' }],
}
