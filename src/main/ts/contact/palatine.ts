import { ContactData } from 'coh-content-db'
import { FirstWard } from '../zone/first-ward'

export const Palatine: ContactData = {
  key: 'palatine',
  name: 'Palatine',
  title: 'Sovereign of the Compound',
  morality: 'all',
  location: { zoneKey: FirstWard.key, coords: [1682, -1034, -2284] },
  levelRange: [20, 29],
  links: [{ title: 'Palatine', href: 'https://homecoming.wiki/wiki/Palatine' }],
}
