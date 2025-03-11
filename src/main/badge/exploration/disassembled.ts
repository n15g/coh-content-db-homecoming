import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../map/warburg'

export const Disassembled: BadgeData = {
  type: 'EXPLORATION',
  key: 'disassembled',
  setTitle: { id: 2426 },
  name: [{ value: 'Disassembled' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Whether intended or not, the structure in front of you looks like a 1980s novelty toy that has seen better days.` }],
  mapKey: Warburg.key,
  loc: [-812, 18, -489],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
