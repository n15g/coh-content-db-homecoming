import { ContactData } from 'coh-content-db'
import { UndergroundNova } from '../zone/underground-nova'

export const Splice: ContactData = {
  key: 'splice',
  name: 'Splice',
  title: 'Hacker and Technophile',
  location: { zoneKey: UndergroundNova.key, coords: [-4185, 508, -395] },
  levelRange: [1, 10],
  links: [{ title: 'Splice', href: 'https://homecoming.wiki/wiki/Splice' }],
}
