import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const SilverMantis: ContactData = {
  key: 'silver-mantis',
  name: 'Silver Mantis',
  title: `Black Scorpion's Assistant and Lover`,
  location: { zoneKey: SharkheadIsle.key, coords: [-1375, 0, -597] },
  levelRange: [20, 25],
  links: [{ title: 'Silver Mantis', href: 'https://homecoming.wiki/wiki/Silver_Mantis' }],
}
