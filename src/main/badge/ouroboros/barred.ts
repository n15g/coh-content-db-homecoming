import { BadgeData } from 'coh-content-db'

export const Barred: BadgeData = {
  type: 'OUROBOROS',
  key: 'barred',
  setTitle: { id: 899 },
  name: [
    { value: 'Barred' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Barred Badge', href: 'https://homecoming.wiki/wiki/Barred_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/barred.png' }],
}
