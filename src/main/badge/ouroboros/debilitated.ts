import { BadgeData } from 'coh-content-db'

export const Debilitated: BadgeData = {
  type: 'ouroboros',
  key: 'debilitated',
  setTitleId: [926],
  name: 'Debilitated',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Debilitated Badge', href: 'https://homecoming.wiki/wiki/Debilitated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/debilitated.png',
}
