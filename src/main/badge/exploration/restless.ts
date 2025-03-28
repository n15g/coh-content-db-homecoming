import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Restless: BadgeData = {
  type: 'EXPLORATION',
  key: 'restless',
  setTitle: { id: 2414 },
  name: [{ value: 'Restless' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Graveyards litter the Bay, but Shivans and Banished Pantheon alike keep mourners from visiting their passed loved ones.` }],
  zoneKey: BloodyBay.key,
  loc: [-792, 2, 459],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
