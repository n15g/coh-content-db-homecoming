import { ContactData } from 'coh-content-db'
import { Faultline } from '../zone/faultline'

export const DocDelilah: ContactData = {
  key: 'doc-delilah',
  name: 'Doc Delilah',
  title: 'Hero Historian',
  location: { zoneKey: Faultline.key, coords: [230, -180, 1042] },
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Doc_Delilah' }],
}
