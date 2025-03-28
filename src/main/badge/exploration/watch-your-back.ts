import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const WatchYourBack: BadgeData = {
  type: 'EXPLORATION',
  key: 'watch-your-back',
  setTitle: { id: 2425 },
  name: [{ value: 'Watch Your Back' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `This tunnel leads directly to the Arachnos base. Freedom Corps used it as a staging area for surprise attacks until they were finally driven off and the tunnel entrance closed.` }],
  zoneKey: ReclusesVictory.key,
  loc: [-1343.7, -41.7, -1539.7],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
