import { BadgeData } from 'coh-content-db'

export const Stalled: BadgeData = {
  type: 'OUROBOROS',
  key: 'stalled',
  setTitle: { id: 901 },
  name: [
    { value: 'Stalled' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no travel powers.',
  links: [
    { title: 'Stalled Badge', href: 'https://homecoming.wiki/wiki/Stalled_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalled.png' }],
}
