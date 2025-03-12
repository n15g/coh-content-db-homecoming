import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'

export const Volatile: BadgeData = {
  type: 'EXPLORATION',
  key: 'volatile',
  setTitle: { id: 2418 },
  name: [{ value: 'Volatile' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `This refinery was already under investigation for its poor handling of explosive gases when the shockwave from the Sunburst incident created a chain reaction that leveled the entire complex.` }],
  mapKey: SirensCall.key,
  loc: [-300.5, -132.5, -635],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
