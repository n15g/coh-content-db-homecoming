import { BadgeData, zoneLink } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const WashedUp: BadgeData = {
  type: 'EXPLORATION',
  key: 'washed-up',
  setTitle: { id: 252 },
  name: [{ value: 'Washed Up' }],
  alignment: ['V'],
  zoneKey: PortOakes.key,
  loc: [-3903, 16, -1369],
  badgeText: [{
    value: `Emil Marcone's brother was found at low tide in this particular vehicle.`,
  }],
  notes: `Located in ${zoneLink(PortOakes)}, in the Fort Hades neighborhood.

          From the Fort Hades marker, head due east until you reach the water. There is an old rusted blue car on your left. The badge marker is on top of that car.`,
  links: [
    { title: 'Washed Up Badge', href: 'https://homecoming.wiki/wiki/Washed_Up_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '2',
}
