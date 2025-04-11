import { ContactData } from 'coh-content-db'
import { UndergroundImperial } from '../zone/underground-imperial'

export const Vagabond: ContactData = {
  key: 'vagabond',
  name: 'Vagabond',
  title: 'Ex-Soldier',
  location: { zoneKey: UndergroundImperial.key, coords: [-851, 336, -3378] },
  levelRange: [8, 15],
  links: [{ title: 'Vagabond', href: 'https://homecoming.wiki/wiki/Vagabond' }],
}
