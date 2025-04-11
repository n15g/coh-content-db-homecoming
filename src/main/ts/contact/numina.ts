import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const Numina: ContactData = {
  key: 'numina',
  name: 'Numina',
  title: 'Tammy Arcanus',
  location: { zoneKey: FoundersFalls.key, coords: [3778, 4, 712] },
  levelRange: [35, 40],
  links: [{ title: 'Numina', href: 'https://homecoming.wiki/wiki/Numina' }],
}
