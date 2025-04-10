import { ContactData } from 'coh-content-db'
import { UndergroundNova } from '../zone/underground-nova'

export const JackHammer: ContactData = {
  key: 'jack-hammer',
  name: 'Jack Hammer',
  title: 'Resistance Cell Captain',
  location: { zoneKey: UndergroundNova.key, coords: [-4136, 528, -525] },
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Jack_Hammer' }],
}
