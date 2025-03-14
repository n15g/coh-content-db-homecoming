import { BadgeData } from 'coh-content-db'

export const Weakened: BadgeData = {
  type: 'OUROBOROS',
  key: 'weakened',
  setTitle: { id: 928 },
  name: [
    { value: 'Weakened' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Weakened Badge', href: 'https://homecoming.wiki/wiki/Weakened_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/weakened.png' }],
}
