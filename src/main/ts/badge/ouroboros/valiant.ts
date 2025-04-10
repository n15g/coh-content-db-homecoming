import { BadgeData } from 'coh-content-db'

export const Valiant: BadgeData = {
  type: 'ouroboros',
  key: 'valiant',
  setTitleId: [882],
  name: 'Valiant',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 30 and 34 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 30 and 34 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc with enemies buffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Valiant Badge', href: 'https://homecoming.wiki/wiki/Valiant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/valiant.png',
}
