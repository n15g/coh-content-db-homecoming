import { BadgeData } from 'coh-content-db'

export const Adventurous: BadgeData = {
  type: 'ouroboros',
  key: 'adventurous',
  setTitleId: [871],
  name: 'Adventurous',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 20 and 24 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 20 and 24 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc while debuffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Adventurous Badge', href: 'https://homecoming.wiki/wiki/Adventurous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adventurous.png',
}
