import { ContactData } from 'coh-content-db'
import { KingsRow } from '../zone/kings-row'

export const PaulaDempsey: ContactData = {
  key: 'paula-dempsey',
  name: 'Paula Dempsey',
  title: 'Mechanic and Inventor',
  location: { zoneKey: KingsRow.key, coords: [-1510, -42, 525] },
  levelRange: [5, 14],
  links: [{ title: 'Paula Dempsey', href: 'https://homecoming.wiki/wiki/Paula_Dempsey' }],
}
