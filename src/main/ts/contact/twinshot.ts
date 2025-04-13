import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const Twinshot: ContactData = {
  key: 'twinshot',
  name: 'Twinshot',
  title: 'Pistol-Packing Powerhouse',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [450, 0, -417] },
  levelRange: [5, 19],
  links: [{ title: 'Twinshot', href: 'https://homecoming.wiki/wiki/Twinshot' }],
}
