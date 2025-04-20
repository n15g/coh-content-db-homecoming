import { BadgeData } from 'coh-content-db'

export const Weakened: BadgeData = {
  type: 'ouroboros',
  key: 'weakened',
  setTitleId: [928],
  name: 'Weakened',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no enhancements.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Weakened Badge', href: 'https://homecoming.wiki/wiki/Weakened_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/weakened.png',
}
