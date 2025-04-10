import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const LauraLockhart: ContactData = {
  key: 'laura-lockhart',
  name: 'Laura Lockhart',
  title: 'UNSF Deprogramming Specialist',
  location: { zoneKey: SteelCanyon.key, coords: [-3743.6, -84, -522.2] },
  levelRange: [15, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Laura_Lockhart' }],
}
