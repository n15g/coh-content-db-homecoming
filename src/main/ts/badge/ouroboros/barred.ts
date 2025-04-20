import { BadgeData } from 'coh-content-db'

export const Barred: BadgeData = {
  type: 'ouroboros',
  key: 'barred',
  setTitleId: [899],
  name: 'Barred',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no travel powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Barred Badge', href: 'https://homecoming.wiki/wiki/Barred_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/barred.png',
}
