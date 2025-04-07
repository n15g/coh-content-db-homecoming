import { BadgeData } from 'coh-content-db'

export const Stemmed: BadgeData = {
  type: 'ouroboros',
  key: 'stemmed',
  setTitleId: [902],
  name: 'Stemmed',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no travel powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Stemmed Badge', href: 'https://homecoming.wiki/wiki/Stalled_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stemmed.png',
}
