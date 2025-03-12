import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'

export const WastedResources: BadgeData = {
  type: 'EXPLORATION',
  key: 'wasted-resources',
  setTitle: { id: 2415 },
  name: [{ value: 'Wasted Resources' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `These rigs stand derelict still, waiting for the area to be secured and the great War Walls to be repaired.` }],
  mapKey: SirensCall.key,
  loc: [-1227.4, 71, -324.5],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
