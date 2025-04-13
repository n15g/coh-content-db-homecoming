import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const Ractespriel: ContactData = {
  key: 'ractespriel',
  name: 'Ractespriel',
  title: 'Respecification Trial Contact',
  morality: 'villainous',
  location: { zoneKey: NervaArchipelago.key, coords: [3940, 18, 7076] },
  levelRange: [44, 50],
  links: [{ title: 'Ractespriel', href: 'https://homecoming.wiki/wiki/Ractespriel' }],
}
