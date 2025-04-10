import { BadgeData } from 'coh-content-db'

export const Decreased: BadgeData = {
  type: 'ouroboros',
  key: 'decreased',
  setTitleId: [930],
  name: 'Decreased',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no enhancements.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Decreased Badge', href: 'https://homecoming.wiki/wiki/Decreased_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/decreased.png',
}
