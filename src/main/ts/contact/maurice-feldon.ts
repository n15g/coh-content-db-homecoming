import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const MauriceFeldon: ContactData = {
  key: 'maurice-feldon',
  name: 'Maurice Feldon',
  title: `Inventor's Assistant`,
  location: { zoneKey: AtlasPark.key, coords: [-119, -784, -892] },
  levelRange: [5, 14],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Maurice_Feldon' }],
}
