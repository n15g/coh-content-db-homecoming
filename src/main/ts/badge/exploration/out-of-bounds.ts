import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const OutOfBounds: BadgeData = {
  type: 'exploration',
  key: 'out-of-bounds',
  setTitleId: [2465],
  name: 'Out of Bounds',
  morality: 'all',
  badgeText: `The Cimeroran Traitors have kept Castellum Quarter under their control for years. The walls have proven to be nearly impossible to breach, successfully rendering the fortress unreachable to even the strongest warriors.`,
  notes: `Located 127 yards south of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Out of Bounds Badge', href: 'https://homecoming.wiki/wiki/Out_of_Bounds_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [-1004, 138.2, 3123.5], icon: 'badge', iconText: '5' } },
  ],
}
