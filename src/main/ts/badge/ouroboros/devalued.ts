import { BadgeData } from 'coh-content-db'

export const Devalued: BadgeData = {
  type: 'ouroboros',
  key: 'devalued',
  setTitleId: [931],
  name: 'Devalued',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 40 and 45 while not gaining bonuses from slotted Enhancements.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not gaining bonuses from slotted Enhancements.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no enhancements.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Devalued Badge', href: 'https://homecoming.wiki/wiki/Devalued_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/devalued.png',
}
