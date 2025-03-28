import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Nuclear: BadgeData = {
  type: 'EXPLORATION',
  key: 'nuclear',
  setTitle: { id: 2429 },
  name: [{ value: 'Nuclear' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Warburg ceased manufacturing nuclear warheads when the treaty was signed in 1982, but not before producing an enormous stockpile.` }],
  zoneKey: Warburg.key,
  loc: [363, -57, -335],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
