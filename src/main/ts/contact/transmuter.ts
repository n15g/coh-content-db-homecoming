import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const Transmuter: ContactData = {
  key: 'transmuter',
  name: 'Transmuter',
  title: 'Former Mage',
  location: { zoneKey: ImperialCity.key, coords: [180, -38, 453] },
  levelRange: [8, 15],
  links: [{ title: 'Transmuter', href: 'https://homecoming.wiki/wiki/Transmuter' }],
}
