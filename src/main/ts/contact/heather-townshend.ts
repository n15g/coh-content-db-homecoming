import { ContactData } from 'coh-content-db'
import { DarkAstoria } from '../zone/dark-astoria'

export const HeatherTownshend: ContactData = {
  key: 'heather-townshend',
  name: 'Heather Townshend',
  title: 'Architect',
  morality: 'primal',
  location: { zoneKey: DarkAstoria.key, coords: [4542, 42, 1213] },
  levelRange: [50],
  links: [{ title: 'Heather Townshend', href: 'https://homecoming.wiki/wiki/Heather_Townshend' }],
}
