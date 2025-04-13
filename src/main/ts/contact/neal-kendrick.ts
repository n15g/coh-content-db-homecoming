import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const NealKendrick: ContactData = {
  key: 'neal-kendrick',
  name: 'Neal Kendrick',
  title: 'Media Watchdog',
  morality: 'heroic',
  location: { zoneKey: Brickstown.key, coords: [376, 0, 1576] },
  levelRange: [30, 34],
  links: [{ title: 'Neal Kendrick', href: 'https://homecoming.wiki/wiki/Neal_Kendrick' }],
}
