import { BadgeData } from 'coh-content-db'

export const Devalued: BadgeData = {
  type: 'OUROBOROS',
  key: 'devalued',
  setTitle: { id: 931 },
  name: [
    { value: 'Devalued' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Devalued Badge', href: 'https://homecoming.wiki/wiki/Devalued_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/devalued.png' }],
}
