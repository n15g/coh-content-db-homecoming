import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const OperativeRenault: ContactData = {
  key: 'operative-renault',
  name: 'Operative Renault',
  title: 'Arachnos Strike Force Operative',
  location: { zoneKey: SharkheadIsle.key, coords: [-160.7, 64, -1056.9] },
  levelRange: [25, 30],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Strike_Force_Operative_Renault' }],
}
