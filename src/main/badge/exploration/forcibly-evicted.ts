import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const ForciblyEvicted: BadgeData = {
  type: 'EXPLORATION',
  key: 'forcibly-evicted',
  setTitle: { id: 2427 },
  name: [{ value: 'Forcibly Evicted' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Arachnos 'forcibly evicted' the Council from Warburg in the late 1960s. What remains of the Council's resources has been boxed up and left to collect dust for over fifty years.` }],
  zoneKey: Warburg.key,
  loc: [4, -64, -436],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
