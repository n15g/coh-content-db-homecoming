import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const CommutersWoe: BadgeData = {
  type: 'exploration',
  key: 'commuters-woe',
  setTitleId: [1489],
  name: `Commuter's Woe`,
  morality: 'rogue-isles-access',
  badgeText: `The Mount Diable Tunnel, destroyed following a turf war gone explosive, connected Port Oakes to Cap au Diable. Much to the chagrin of many commuters, no effort has been made to rebuild it.`,
  notes: `Located in the Oil Spill neighborhood, at the blocked off tunnel 194 yards west of the Quartermaster.`,
  links: [
    { title: `Commuter's Woe Badge`, href: 'https://homecoming.wiki/wiki/Commuter%27s_Woe_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [1771, 64, -696] }, vidiotMapKey: '7' },
  ],
}
