import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const GameOver: BadgeData = {
  type: 'exploration',
  key: 'game-over',
  setTitleId: [2430],
  name: 'Game Over',
  morality: 'all',
  badgeText: `This bunker was where the Council made their final stand against Arachnos. The battle for the bunker lasted two weeks, until Lord Recluse was forced to personally lead the final assault.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [-1178, 98, -724] }, vidiotMapKey: '8' },
  ],
}
