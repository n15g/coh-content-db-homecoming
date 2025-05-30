import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const PowderMonkey: BadgeData = {
  type: 'exploration',
  key: 'powder-monkey',
  setTitleId: [253],
  name: 'Powder Monkey',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The last of the pirates died at this location defending the fort against Blackbeard.`,
  notes: `Located behind three cannons in the Fort Hades neighborhood, approx. 154 yards east and slightly south of the Fort Hades marker.`,
  links: [
    { title: 'Powder Monkey Badge', href: 'https://homecoming.wiki/wiki/Powder_Monkey_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [-3738, 238, -1128], icon: 'badge', iconText: '3' } },
  ],
}
