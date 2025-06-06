import { ContactData } from 'coh-content-db'
import { UndergroundImperial } from '../zone/underground-imperial'

export const Hatchet: ContactData = {
  key: 'hatchet',
  name: 'Hatchet',
  title: 'Ghoul Tamer',
  morality: 'resistance',
  location: { zoneKey: UndergroundImperial.key, coords: [-977, 332, -3324] },
  levelRange: [8, 15],
  links: [{ title: 'Hatchet', href: 'https://homecoming.wiki/wiki/Hatchet' }],
}
