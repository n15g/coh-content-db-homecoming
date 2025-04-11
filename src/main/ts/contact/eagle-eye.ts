import { ContactData } from 'coh-content-db'
import { KingsRow } from '../zone/kings-row'

export const EagleEye: ContactData = {
  key: 'eagle-eye',
  name: 'Eagle Eye',
  title: 'Former member of The Regulators',
  location: { zoneKey: KingsRow.key, coords: [-894.5, 32, 1381.5] },
  levelRange: [7, 20],
  links: [{ title: 'Eagle Eye', href: 'https://homecoming.wiki/wiki/Eagle_Eye' }],
}
