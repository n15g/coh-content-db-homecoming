import { BadgeData } from 'coh-content-db'

export const ShutDown: BadgeData = {
  type: 'OUROBOROS',
  key: 'shut-down',
  setTitle: { id: 897 },
  name: [
    { value: 'Shut Down' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Shut Down Badge', href: 'https://homecoming.wiki/wiki/Shut_Down_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/shut-down.png' }],
}
