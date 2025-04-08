import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const WatchYourBack: BadgeData = {
  type: 'exploration',
  key: 'watch-your-back',
  setTitleId: [2425],
  name: 'Watch Your Back',
  morality: 'all',
  badgeText: `This tunnel leads directly to the Arachnos base. Freedom Corps used it as a staging area for surprise attacks until they were finally driven off and the tunnel entrance closed.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [-1343.7, -41.7, -1539.7] }, vidiotMapKey: '8' },
  ],
}
