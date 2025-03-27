import { BadgeData, mapLink } from 'coh-content-db'
import { PortOakes } from '../../map/port-oakes'

export const LongWalk: BadgeData = {
  type: 'EXPLORATION',
  key: 'long-walk',
  setTitle: { id: 1487 },
  name: [{ value: 'Long Walk' }],
  alignment: ['V'],
  mapKey: PortOakes.key,
  loc: [-703, 128, 211],
  badgeText: [{
    value: `These long parking tunnels are the last thing that many who cross the Marcones see when they're asked to "come take a long walk."
 Those who live in Port Oakes know to steer clear - and that all of the cars in the lot belong to the Marcones.`,
  }],
  notes: `Located in ${mapLink(PortOakes)}, in the Arena District neighborhood.

It is in the middle of the northern parking tunnel 73 yards south of the hospital.`,
  links: [
    { title: 'Long Walk Badge', href: 'https://homecoming.wiki/wiki/Long_Walk_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '5',
}
