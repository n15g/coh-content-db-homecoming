import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const Moonfire: ContactData = {
  key: 'moonfire',
  name: 'Moonfire',
  title: 'Task Force Contact',
  location: { zoneKey: StrigaIsle.key, coords: [-3597.5, 63, -390] },
  levelRange: [23, 28],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Moonfire' }],
}
