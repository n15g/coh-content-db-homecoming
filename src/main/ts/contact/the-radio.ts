import { ContactData } from 'coh-content-db'
import { PortOakes } from '../zone/port-oakes'

export const TheRadio: ContactData = {
  key: 'the-radio',
  name: 'The Radio',
  title: 'An innocuous radio',
  morality: 'villainous',
  location: { zoneKey: PortOakes.key, coords: [-1457.5, 67, 63.5] },
  levelRange: [10, 14],
  links: [{ title: 'The Radio', href: 'https://homecoming.wiki/wiki/The_Radio' }],
}
