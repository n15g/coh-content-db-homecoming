import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const Orpheus: ContactData = {
  key: 'orpheus',
  name: 'Orpheus',
  title: 'Bard and Hunter of the Undead',
  morality: 'villainous',
  location: { zoneKey: StrigaIsle.key, coords: [-2376, 0.8, -1957.3] },
  levelRange: [25, 29],
  links: [{ title: 'Orpheus', href: 'https://homecoming.wiki/wiki/Orpheus' }],
}
