import { BadgeData } from 'coh-content-db'

export const Lessened: BadgeData = {
  type: 'ouroboros',
  key: 'lessened',
  setTitleId: [924],
  name: 'Lessened',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no enhancements.',
  links: [
    { title: 'Lessened Badge', href: 'https://homecoming.wiki/wiki/Lessened_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/lessened.png',
}
