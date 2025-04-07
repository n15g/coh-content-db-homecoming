import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const WhatLurksBeyond: BadgeData = {
  type: 'exploration',
  key: 'what-lurks-beyond',
  setTitleId: [2411],
  name: 'What Lurks Beyond',
  morality: 'all',
  badgeText: `Though this beach looks peaceful, creatures resembling the Neo-Shivans have been sighted here. Best to proceed with caution.`,
  zoneKey: BloodyBay.key,
  loc: [-1490, -23, -1883],
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '5',
}
