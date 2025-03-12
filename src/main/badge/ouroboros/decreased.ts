import { BadgeData } from 'coh-content-db'

export const Decreased: BadgeData = {
  type: 'OUROBOROS',
  key: 'decreased',
  setTitle: { id: 930 },
  name: [
    { value: 'Decreased' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Decreased Badge', href: 'https://homecoming.wiki/wiki/Decreased_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/decreased.png' }],
}
