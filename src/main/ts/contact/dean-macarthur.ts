import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const DeanMacArthur: ContactData = {
  key: 'dean-macarthur',
  name: 'Dean MacArthur',
  title: 'Informant',
  location: { zoneKey: SharkheadIsle.key, coords: [255, 32, -762] },
  levelRange: [20, 29],
  links: [{ title: 'Dean MacArthur', href: 'https://homecoming.wiki/wiki/Dean_MacArthur' }],
}
