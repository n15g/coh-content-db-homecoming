import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const Gaussian: ContactData = {
  key: 'gaussian',
  name: 'Gaussian',
  title: 'Vanguard Tactician',
  location: { zoneKey: RiktiWarZone.key, coords: [424, -1192, -2225] },
  levelRange: [45, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Gaussian' }],
}
