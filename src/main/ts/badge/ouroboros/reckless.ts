import { BadgeData } from 'coh-content-db'

export const Reckless: BadgeData = {
  type: 'ouroboros',
  key: 'reckless',
  setTitleId: [875],
  name: 'Reckless',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 40 and 45 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 40 and 45 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc while debuffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Reckless Badge', href: 'https://homecoming.wiki/wiki/Reckless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/reckless.png',
}
