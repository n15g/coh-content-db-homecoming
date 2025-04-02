import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const DrFrancois: ContactData = {
  key: 'dr-francois',
  name: 'Dr. Francois',
  title: 'Robotics Engineer',
  zoneKey: StrigaIsle.key,
  loc: [104.5, 0, -1209.6],
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Francois' }],
}
