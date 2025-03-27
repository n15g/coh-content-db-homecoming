import { BadgeData, mapLink } from 'coh-content-db'
import { PortOakes } from '../../map/port-oakes'

export const CommutersWoe: BadgeData = {
  type: 'EXPLORATION',
  key: 'commuters-woe',
  setTitle: { id: 1489 },
  name: [{ value: 'Commuter\'s Woe' }],
  alignment: ['V'],
  mapKey: PortOakes.key,
  loc: [1771, 64, -696],
  badgeText: [{
    value: `The Mount Diable Tunnel, destroyed following a turf war gone explosive, connected Port Oakes to Cap au Diable.
 Much to the chagrin of many commuters, no effort has been made to rebuild it.`,
  }],
  notes: `Located in ${mapLink(PortOakes)}, in the Oil Spill neighborhood.

It is at the blocked off tunnel 194 yards west of the Quartermaster.`,
  links: [
    { title: 'Commuter\'s Woe Badge', href: 'https://homecoming.wiki/wiki/Commuter%27s_Woe_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
