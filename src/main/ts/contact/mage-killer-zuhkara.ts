import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const MageKillerZuhkara: ContactData = {
  key: 'mage-killer-zuhkara',
  name: 'Mage-Killer Zuhkara',
  title: 'Arcane Assassin',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2700, -65.9, 764] },
  levelRange: [40, 44],
  links: [{ title: 'Mage-Killer Zuhkara', href: 'https://homecoming.wiki/wiki/Mage-Killer_Zuhkara' }],
}
