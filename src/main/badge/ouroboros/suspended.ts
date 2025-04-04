import { BadgeData } from 'coh-content-db'

export const Suspended: BadgeData = {
  type: 'ouroboros',
  key: 'suspended',
  setTitleId: [903],
  name: [
    { value: 'Suspended' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no travel powers.',
  links: [
    { title: 'Suspended Badge', href: 'https://homecoming.wiki/wiki/Suspended_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/suspended.png' }],
}
