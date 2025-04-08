import { BadgeData } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const WashedUp: BadgeData = {
  type: 'exploration',
  key: 'washed-up',
  setTitleId: [252],
  name: 'Washed Up',
  morality: 'rogue-isles-access',
  badgeText: `Emil Marcone's brother was found at low tide in this particular vehicle.`,
  notes: `Located in the Fort Hades neighborhood, on top of a rusted blue car near the water, directly east of the Fort Hades marker.`,
  links: [
    { title: 'Washed Up Badge', href: 'https://homecoming.wiki/wiki/Washed_Up_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PortOakes.key, coords: [-3903, 16, -1369] }, vidiotMapKey: '2' },
  ],
}
