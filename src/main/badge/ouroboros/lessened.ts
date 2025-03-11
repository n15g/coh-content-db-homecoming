import { BadgeData } from 'coh-content-db'

export const Lessened: BadgeData = {
  type: 'OUROBOROS',
  key: 'lessened',
  setTitle: { id: 924 },
  name: [
    { value: 'Lessened' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no enhancements.',
  links: [
    { title: 'Lessened Badge', href: 'https://homecoming.wiki/wiki/Lessened_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/lessened.png' }],
}
