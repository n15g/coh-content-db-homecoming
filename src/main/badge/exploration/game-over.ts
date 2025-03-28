import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const GameOver: BadgeData = {
  type: 'EXPLORATION',
  key: 'game-over',
  setTitle: { id: 2430 },
  name: [{ value: 'Game Over' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `This bunker was where the Council made their final stand against Arachnos. The battle for the bunker lasted two weeks, until Lord Recluse was forced to personally lead the final assault.` }],
  zoneKey: Warburg.key,
  loc: [-1178, 98, -724],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '8',
}
