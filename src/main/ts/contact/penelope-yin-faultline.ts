import { ContactData } from 'coh-content-db'
import { Faultline } from '../zone/faultline'

export const PenelopeYinFaultline: ContactData = {
  key: 'penelope-yin-faultline',
  name: 'Penelope Yin (Faultline)',
  title: 'Trouble-prone Teenager',
  location: { zoneKey: Faultline.key, coords: [-900, 0, -492.5] },
  levelRange: [15, 19],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Penelope_Yin_(Faultline)' }],
}
