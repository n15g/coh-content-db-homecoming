import { BadgeData, zoneLink } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const OutOfBounds: BadgeData = {
  type: 'EXPLORATION',
  key: 'out-of-bounds',
  setTitle: { id: 2465 },
  name: [{ value: 'Out of Bounds' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The Cimeroran Traitors have kept Castellum Quarter under their control for years. The walls have proven to be nearly impossible to breach, successfully rendering the fortress unreachable to even the strongest warriors.` }],
  zoneKey: Cimerora.key,
  loc: [-1004, 138.2, 3123.5],
  notes: `Located in ${zoneLink(Cimerora)}, 127 yards south of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Out of Bounds Badge', href: 'https://homecoming.wiki/wiki/Out_of_Bounds_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
