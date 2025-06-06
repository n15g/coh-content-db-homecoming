import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const DrStribbling: ContactData = {
  key: 'dr-stribbling',
  name: 'Dr. Stribbling',
  title: 'Multidisciplinary Scientist',
  morality: 'vigilante',
  location: { zoneKey: Brickstown.key, coords: [-1142.9, 16, -1629.2] },
  levelRange: [30, 34],
  links: [{ title: 'Dr. Stribbling', href: 'https://homecoming.wiki/wiki/Dr._Stribbling' }],
}
