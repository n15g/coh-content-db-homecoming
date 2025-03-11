import { BadgeData } from 'coh-content-db'

export const Debilitated: BadgeData = {
  type: 'OUROBOROS',
  key: 'debilitated',
  setTitle: { id: 926 },
  name: [
    { value: 'Debilitated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Debilitated Badge', href: 'https://homecoming.wiki/wiki/Debilitated_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/debilitated.png' }],
}
