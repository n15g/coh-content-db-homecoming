import { BadgeData } from 'coh-content-db'

export const Deflated: BadgeData = {
  type: 'ouroboros',
  key: 'deflated',
  setTitleId: [929],
  name: 'Deflated',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no enhancements.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Deflated Badge', href: 'https://homecoming.wiki/wiki/Deflated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/deflated.png',
}
