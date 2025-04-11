import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const LarsHansen: ContactData = {
  key: 'lars-hansen',
  name: 'Lars Hansen',
  title: 'Light Keeper',
  location: { zoneKey: StrigaIsle.key, coords: [-494, 81, -2360] },
  levelRange: [25, 29],
  links: [{ title: 'Lars Hansen', href: 'https://homecoming.wiki/wiki/Lars_Hansen' }],
}
