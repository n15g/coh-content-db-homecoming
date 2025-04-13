import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const Levantera: ContactData = {
  key: 'levantera',
  name: 'Levantera',
  title: 'Co-Leader of the Vanguard Shield Division',
  morality: 'primal',
  location: { zoneKey: RiktiWarZone.key, coords: [328, -1188, -2397.5] },
  levelRange: [35, 50],
  links: [{ title: 'Levantera', href: 'https://homecoming.wiki/wiki/Levantera' }],
}
