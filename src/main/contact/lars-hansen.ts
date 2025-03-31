import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const LarsHansen: ContactData = {
  key: 'lars-hansen',
  name: 'Lars Hansen',
  title: 'Light Keeper',
  zoneKey: StrigaIsle.key,
  loc: [-494, 81, -2360],
  levelRange: [25, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Lars_Hansen' }],
}
