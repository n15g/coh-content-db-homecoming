import { BadgeData } from 'coh-content-db'

export const Refrained: BadgeData = {
  type: 'OUROBOROS',
  key: 'refrained',
  setTitle: { id: 895 },
  name: [
    { value: 'Refrained' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no travel powers.',
  links: [
    { title: 'Refrained Badge', href: 'https://homecoming.wiki/wiki/Refrained_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/refrained.png' }],
}
