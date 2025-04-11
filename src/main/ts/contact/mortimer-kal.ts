import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const MortimerKal: ContactData = {
  key: 'mortimer-kal',
  name: 'Mortimer Kal',
  title: 'Midnighter Archmage',
  location: { zoneKey: SharkheadIsle.key, coords: [-1476.1, 0, -395.9] },
  levelRange: [20, 40],
  links: [{ title: 'Mortimer Kal', href: 'https://homecoming.wiki/wiki/Mortimer_Kal' }],
}
