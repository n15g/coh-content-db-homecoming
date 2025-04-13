import { ContactData } from 'coh-content-db'
import { FirstWard } from '../zone/first-ward'

export const Nadia: ContactData = {
  key: 'nadia',
  name: 'Nadia',
  title: 'Carnival Mistress',
  morality: 'all',
  location: { zoneKey: FirstWard.key, coords: [1858, 196, -2852] },
  levelRange: [20, 29],
  links: [{ title: 'Nadia', href: 'https://homecoming.wiki/wiki/Nadia' }],
}
