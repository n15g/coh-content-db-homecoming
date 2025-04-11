import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const DarrenWade: ContactData = {
  key: 'darrin-wade',
  name: 'Darrin Wade',
  title: 'Ex Midnighter',
  location: { zoneKey: SharkheadIsle.key, coords: [2435.5, 32, 149] },
  levelRange: [20, 30],
  links: [{ title: 'Darrin Wade', href: 'https://homecoming.wiki/wiki/Darrin_Wade' }],
}
