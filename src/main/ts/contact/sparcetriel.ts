import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const Sparcetriel: ContactData = {
  key: 'sparcetriel',
  name: 'Sparcetriel',
  title: 'Respecification Trial Contact',
  location: { zoneKey: NervaArchipelago.key, coords: [-1260.5, 11, 6405.5] },
  levelRange: [24, 33],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Sparcetriel' }],
}
