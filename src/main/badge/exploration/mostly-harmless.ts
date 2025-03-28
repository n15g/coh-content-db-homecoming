import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const MostlyHarmless: BadgeData = {
  type: 'EXPLORATION',
  key: 'mostly-harmless',
  setTitle: { id: 2413 },
  name: [{ value: 'Mostly Harmless' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The Shiva fragments that crashed here created little collateral damage. This refinery is completely intact around the impact zone.` }],
  zoneKey: BloodyBay.key,
  loc: [-192, 96, 2064],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
