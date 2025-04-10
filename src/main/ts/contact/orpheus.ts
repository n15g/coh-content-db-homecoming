import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const Orpheus: ContactData = {
  key: 'orpheus',
  name: 'Orpheus',
  title: 'Bard and Hunter of the Undead',
  location: { zoneKey: StrigaIsle.key, coords: [-2376, 0.8, -1957.3] },
  levelRange: [25, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Orpheus' }],
}
