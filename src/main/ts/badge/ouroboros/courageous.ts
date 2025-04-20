import { BadgeData } from 'coh-content-db'

export const Courageous: BadgeData = {
  type: 'ouroboros',
  key: 'courageous',
  setTitleId: [879],
  name: 'Courageous',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc with enemies buffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Courageous Badge', href: 'https://homecoming.wiki/wiki/Courageous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/courageous.png',
}
