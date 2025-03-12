import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../map/bloody-bay'

export const WhatLurksBeyond: BadgeData = {
  type: 'EXPLORATION',
  key: 'what-lurks-beyond',
  setTitle: { id: 2411 },
  name: [{ value: 'What Lurks Beyond' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Though this beach looks peaceful, creatures resembling the Neo-Shivans have been sighted here. Best to proceed with caution.` }],
  mapKey: BloodyBay.key,
  loc: [-1490, -23, -1883],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
