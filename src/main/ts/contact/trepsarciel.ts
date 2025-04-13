import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const Trepsarciel: ContactData = {
  key: 'trepsarciel',
  name: 'Trepsarciel',
  title: 'Respecification Trial Contact',
  morality: 'villainous',
  location: { zoneKey: NervaArchipelago.key, coords: [855, 86, 2476] },
  levelRange: [34, 43],
  links: [{ title: 'Trepsarciel', href: 'https://homecoming.wiki/wiki/Trepsarciel' }],
}
