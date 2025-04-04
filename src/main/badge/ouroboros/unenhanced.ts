import { BadgeData } from 'coh-content-db'

export const Unenhanced: BadgeData = {
  type: 'ouroboros',
  key: 'unenhanced',
  setTitleId: [932],
  name: [
    { value: 'Unenhanced' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no enhancements.',
  links: [
    { title: 'Unenhanced Badge', href: 'https://homecoming.wiki/wiki/Unenhanced_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unenhanced.png' }],
}
