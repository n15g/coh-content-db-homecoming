import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const VinceDubrowski: ContactData = {
  key: 'vince-dubrowski',
  name: 'Vince Dubrowski',
  title: 'Cage Consortium Representative',
  location: { zoneKey: SharkheadIsle.key, coords: [1277, 64, -195] },
  levelRange: [20, 24],
  links: [{ title: 'Vince Dubrowski', href: 'https://homecoming.wiki/wiki/Vince_Dubrowski' }],
}
