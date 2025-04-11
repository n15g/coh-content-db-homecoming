import { ContactData } from 'coh-content-db'
import { UndergroundImperial } from '../zone/underground-imperial'

export const Beholder: ContactData = {
  key: 'beholder',
  name: 'Beholder',
  title: 'Former Seer',
  location: { zoneKey: UndergroundImperial.key, coords: [-689, 352, -3377] },
  levelRange: [8, 15],
  links: [{ title: 'Beholder', href: 'https://homecoming.wiki/wiki/Beholder' }],
}
