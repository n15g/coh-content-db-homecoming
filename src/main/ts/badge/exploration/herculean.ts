import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Herculean: BadgeData = {
  type: 'exploration',
  key: 'herculean',
  setTitleId: [2428],
  name: 'Herculean',
  morality: 'all',
  badgeText: `From this vantage point you can observe Malta's Hercules Titans as they prepare for deployment.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [1955, 120, -338] }, vidiotMapKey: '6' },
  ],
}
