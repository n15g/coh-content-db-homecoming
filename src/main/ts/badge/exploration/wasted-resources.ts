import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const WastedResources: BadgeData = {
  type: 'exploration',
  key: 'wasted-resources',
  setTitleId: [2415],
  name: 'Wasted Resources',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `These rigs stand derelict still, waiting for the area to be secured and the great War Walls to be repaired.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SirensCall.key, coords: [-1227.4, 71, -324.5], icon: 'badge', iconText: '5' } },
  ],
}
