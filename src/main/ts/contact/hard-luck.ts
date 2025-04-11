import { ContactData } from 'coh-content-db'
import { StMartial } from '../zone/st-martial'

export const HardLuck: ContactData = {
  key: 'hard-luck',
  name: 'Hard Luck',
  title: 'Casino Enforcer',
  location: { zoneKey: StMartial.key, coords: [-2133, -160, 2120] },
  levelRange: [30, 34],
  links: [{ title: 'Hard Luck', href: 'https://homecoming.wiki/wiki/Hard_Luck' }],
}
