import { BadgeData } from 'coh-content-db'

export const Desisted: BadgeData = {
  type: 'OUROBOROS',
  key: 'desisted',
  setTitle: { id: 898 },
  name: [
    { value: 'Desisted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Desisted Badge', href: 'https://homecoming.wiki/wiki/Desisted_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/desisted.png' }],
}
