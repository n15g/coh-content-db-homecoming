import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../map/warburg'

export const Herculean: BadgeData = {
  type: 'EXPLORATION',
  key: 'herculean',
  setTitle: { id: 2428 },
  name: [{ value: 'Herculean' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `From this vantage point you can observe Malta's Hercules Titans as they prepare for deployment.` }],
  mapKey: Warburg.key,
  loc: [1955, 120, -338],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '6',
}
