import { ContactData } from 'coh-content-db'
import { Faultline } from '../zone/faultline'

export const JimTemblor: ContactData = {
  key: 'jim-temblor',
  name: 'Jim Temblor',
  title: 'Angry Young Man',
  zoneKey: Faultline.key,
  loc: [-330, 0.5, -1211.5],
  levelRange: [15, 19],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Jim_Temblor' }],
}
