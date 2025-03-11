import { BadgeData } from 'coh-content-db'

export const Dull: BadgeData = {
  type: 'OUROBOROS',
  key: 'dull',
  setTitle: { id: 920 },
  name: [
    { value: 'Dull' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Dull Badge', href: 'https://homecoming.wiki/wiki/Dull_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/dull.png' }],
}
