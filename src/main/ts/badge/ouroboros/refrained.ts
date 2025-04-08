import { BadgeData } from 'coh-content-db'

export const Refrained: BadgeData = {
  type: 'ouroboros',
  key: 'refrained',
  setTitleId: [895],
  name: 'Refrained',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no travel powers.',
  links: [
    { title: 'Refrained Badge', href: 'https://homecoming.wiki/wiki/Refrained_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/refrained.png',
}
