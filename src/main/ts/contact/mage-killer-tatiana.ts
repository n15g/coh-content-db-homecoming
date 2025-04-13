import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const MageKillerTatiana: ContactData = {
  key: 'mage-killer-tatiana',
  name: 'Mage-Killer Tatiana',
  title: 'Arcane Assassin',
  morality: 'villainous',
  location: { zoneKey: StrigaIsle.key, coords: [-2640.7, 66.7, -3346.5] },
  levelRange: [25, 29],
  links: [{ title: 'Mage-Killer Tatiana', href: 'https://homecoming.wiki/wiki/Mage-Killer_Tatiana' }],
}
