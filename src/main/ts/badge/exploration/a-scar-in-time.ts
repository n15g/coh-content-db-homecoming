import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const AScarInTime: BadgeData = {
  type: 'exploration',
  key: 'a-scar-in-time',
  setTitleId: [2422],
  name: 'A Scar in Time',
  morality: 'all',
  badgeText: `A strange fluctuation in the time stream keeps pulling victims of an old Rikti mutation drug to this point.
Some temporal researchers believe that this connection with the Outbreak is responsible for keeping Recluse's Victory from taking hold, but don't know why.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [552.3, 74.3, -1415.9] }, vidiotMapKey: '5' },
  ],
}
