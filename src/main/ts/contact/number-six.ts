import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const NumberSix: ContactData = {
  key: 'number-six',
  name: 'Number Six',
  title: 'Super Heroic Computer Expert',
  location: { zoneKey: RiktiWarZone.key, coords: [490, -1192, -2279] },
  levelRange: [50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Number_Six' }],
}
