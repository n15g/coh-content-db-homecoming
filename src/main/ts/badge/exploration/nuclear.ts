import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Nuclear: BadgeData = {
  type: 'exploration',
  key: 'nuclear',
  setTitleId: [2429],
  name: 'Nuclear',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `Warburg ceased manufacturing nuclear warheads when the treaty was signed in 1982, but not before producing an enormous stockpile.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [363, -57, -335], icon: 'badge', iconText: '7' } },
  ],
}
