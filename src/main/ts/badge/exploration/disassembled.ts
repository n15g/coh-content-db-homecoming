import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const Disassembled: BadgeData = {
  type: 'exploration',
  key: 'disassembled',
  setTitleId: [2426],
  name: 'Disassembled',
  morality: 'all',
  badgeText: `Whether intended or not, the structure in front of you looks like a 1980s novelty toy that has seen better days.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [-812, 18, -489], icon: 'badge', iconText: '4' } },
  ],
}
