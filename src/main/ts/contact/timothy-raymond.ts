import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const TimothyRaymond: ContactData = {
  key: 'timothy-raymond',
  name: 'Timothy Raymond',
  title: 'Ex Lost',
  morality: 'villainous',
  location: { zoneKey: NervaArchipelago.key, coords: [425, 40, 6588] },
  levelRange: [30, 34],
  links: [{ title: 'Timothy Raymond', href: 'https://homecoming.wiki/wiki/Timothy_Raymond' }],
}
