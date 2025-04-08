import { BadgeData } from 'coh-content-db'

export const ShutDown: BadgeData = {
  type: 'ouroboros',
  key: 'shut-down',
  setTitleId: [897],
  name: 'Shut Down',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Shut Down Badge', href: 'https://homecoming.wiki/wiki/Shut_Down_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/shut-down.png',
}
