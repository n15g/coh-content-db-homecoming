import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const Transmuter: ContactData = {
  key: 'transmuter',
  name: 'Transmuter',
  title: 'Former Mage',
  zoneKey: ImperialCity.key,
  loc: [180, -38, 453],
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Transmuter' }],
}
