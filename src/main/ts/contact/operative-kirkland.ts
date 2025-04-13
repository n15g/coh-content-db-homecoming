import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const OperativeKirkland: ContactData = {
  key: 'operative-kirkland',
  name: 'Operative Kirkland',
  title: 'Arachnos Operative',
  morality: 'villainous',
  location: { zoneKey: SharkheadIsle.key, coords: [463, -2, 833] },
  levelRange: [25, 29],
  links: [{ title: 'Operative Kirkland', href: 'https://homecoming.wiki/wiki/Operative_Kirkland' }],
}
