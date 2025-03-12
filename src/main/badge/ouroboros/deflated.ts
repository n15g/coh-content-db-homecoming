import { BadgeData } from 'coh-content-db'

export const Deflated: BadgeData = {
  type: 'OUROBOROS',
  key: 'deflated',
  setTitle: { id: 929 },
  name: [
    { value: 'Deflated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Deflated Badge', href: 'https://homecoming.wiki/wiki/Deflated_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/deflated.png' }],
}
