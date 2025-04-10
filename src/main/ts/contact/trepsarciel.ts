import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const Trepsarciel: ContactData = {
  key: 'trepsarciel',
  name: 'Trepsarciel',
  title: 'Respecification Trial Contact',
  location: { zoneKey: NervaArchipelago.key, coords: [855, 86, 2476] },
  levelRange: [34, 43],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Trepsarciel' }],
}
