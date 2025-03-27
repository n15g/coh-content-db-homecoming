import { BadgeData, mapLink } from 'coh-content-db'
import { PortOakes } from '../../map/port-oakes'

export const PowderMonkey: BadgeData = {
  type: 'EXPLORATION',
  key: 'powder-monkey',
  setTitle: { id: 253 },
  name: [{ value: 'Powder Monkey' }],
  alignment: ['V'],
  mapKey: PortOakes.key,
  loc: [-3738, 238, -1128],
  badgeText: [{
    value: `The last of the pirates died at this location defending the fort against Blackbeard.`,
  }],
  notes: `Located in ${mapLink(PortOakes)}, behind three cannons in the Fort Hades neighborhood.

The badge marker is approximately 154 yards east and slightly south of the Fort Hades marker.`,
  links: [
    { title: 'Powder Monkey Badge', href: 'https://homecoming.wiki/wiki/Powder_Monkey_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
