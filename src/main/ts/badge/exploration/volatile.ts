import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const Volatile: BadgeData = {
  type: 'exploration',
  key: 'volatile',
  setTitleId: [2418],
  name: 'Volatile',
  morality: 'all',
  badgeText: `This refinery was already under investigation for its poor handling of explosive gases when the shockwave from the Sunburst incident created a chain reaction that leveled the entire complex.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SirensCall.key, coords: [-300.5, -132.5, -635], icon: 'badge', iconText: '8' } },
  ],
}
