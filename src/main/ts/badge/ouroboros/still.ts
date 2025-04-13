import { BadgeData } from 'coh-content-db'

export const Still: BadgeData = {
  type: 'ouroboros',
  key: 'still',
  setTitleId: [900],
  name: 'Still',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using any Travel Power Power Pools.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no travel powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Still Badge', href: 'https://homecoming.wiki/wiki/Still_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/still.png',
}
