import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const ForciblyEvicted: BadgeData = {
  type: 'exploration',
  key: 'forcibly-evicted',
  setTitleId: [2427],
  name: 'Forcibly Evicted',
  morality: 'all',
  badgeText: `Arachnos 'forcibly evicted' the Council from Warburg in the late 1960s. What remains of the Council's resources has been boxed up and left to collect dust for over fifty years.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [4, -64, -436] }, vidiotMapKey: '5' },
  ],
}
