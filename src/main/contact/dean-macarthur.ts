import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const DeanMacArthur: ContactData = {
  key: 'dean-macarthur',
  name: 'Dean MacArthur',
  title: 'Informant',
  zoneKey: SharkheadIsle.key,
  loc: [255, 32, -762],
  levelRange: [20, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dean_MacArthur' }],
}
