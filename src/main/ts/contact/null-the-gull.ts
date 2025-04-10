import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const NullTheGull: ContactData = {
  key: 'null-the-gull',
  name: 'Null the Gull',
  title: 'Time Telling Bird',
  location: { zoneKey: PocketD.key, coords: [-168, 12, -864] },
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Null_the_Gull' }],
}
