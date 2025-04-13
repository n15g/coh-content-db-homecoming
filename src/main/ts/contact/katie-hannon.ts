import { ContactData } from 'coh-content-db'
import { Croatoa } from '../zone/croatoa'

export const KatieHannon: ContactData = {
  key: 'katie-hannon',
  name: 'Katie Hannon',
  title: 'Task Force Contact',
  morality: 'heroic',
  location: { zoneKey: Croatoa.key, coords: [1095, 108, -1095] },
  levelRange: [30, 34],
  links: [{ title: 'Katie Hannon', href: 'https://homecoming.wiki/wiki/Katie_Hannon' }],
}
