import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const Leonard: ContactData = {
  key: 'leonard',
  name: 'Leonard',
  title: 'Bodyguard',
  zoneKey: SharkheadIsle.key,
  loc: [-502, 107, -1273],
  levelRange: [20, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Leonard' }],
}
