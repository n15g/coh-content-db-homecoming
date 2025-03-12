import { BadgeData } from 'coh-content-db'

export const Still: BadgeData = {
  type: 'OUROBOROS',
  key: 'still',
  setTitle: { id: 900 },
  name: [
    { value: 'Still' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Still Badge', href: 'https://homecoming.wiki/wiki/Still_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/still.png' }],
}
