import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const MaxwellChristopher: ContactData = {
  key: 'maxwell-christopher',
  name: 'Maxwell Christopher',
  title: 'FBSA Agent',
  morality: 'heroic',
  location: { zoneKey: FoundersFalls.key, coords: [1678.5, 9, 621] },
  levelRange: [40, 45],
  links: [{ title: 'Maxwell Christopher', href: 'https://homecoming.wiki/wiki/Maxwell_Christopher' }],
}
