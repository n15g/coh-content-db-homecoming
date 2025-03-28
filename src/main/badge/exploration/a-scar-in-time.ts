import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const AScarInTime: BadgeData = {
  type: 'EXPLORATION',
  key: 'a-scar-in-time',
  setTitle: { id: 2422 },
  name: [{ value: 'A Scar in Time' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `A strange fluctuation in the time stream keeps pulling victims of an old Rikti mutation drug to this point. Some temporal researchers believe that this connection with the Outbreak is responsible for keeping Recluse's Victory from taking hold, but don't know why.` }],
  zoneKey: ReclusesVictory.key,
  loc: [552.3, 74.3, -1415.9],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
