import { BadgeData } from 'coh-content-db'

export const Suspended: BadgeData = {
  type: 'OUROBOROS',
  key: 'suspended',
  setTitle: { id: 903 },
  name: [
    { value: 'Suspended' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no travel powers.',
  links: [
    { title: 'Suspended Badge', href: 'https://homecoming.wiki/wiki/Suspended_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/suspended.png' }],
}
