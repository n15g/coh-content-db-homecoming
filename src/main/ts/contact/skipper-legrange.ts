import { ContactData } from 'coh-content-db'
import { Croatoa } from '../zone/croatoa'

export const SkipperLeGrange: ContactData = {
  key: 'skipper-legrange',
  name: 'Skipper LeGrange',
  title: 'Ghost Hunter',
  morality: 'heroic',
  location: { zoneKey: Croatoa.key, coords: [-1315, 0, 2330] },
  levelRange: [25, 29],
  links: [{ title: 'Skipper LeGrange', href: 'https://homecoming.wiki/wiki/Skipper_LeGrange' }],
}
