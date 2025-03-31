import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const LordRecluse: ContactData = {
  key: 'lord-recluse',
  name: 'Lord Recluse',
  title: 'Ruler of the Rogue Isles',
  zoneKey: Grandville.key,
  loc: [2726.5, -55, 934],
  levelRange: [45, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Black_Scorpion' }],
}
