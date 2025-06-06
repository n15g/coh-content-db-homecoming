import { BadgeData } from 'coh-content-db'

export const Stalwart: BadgeData = {
  type: 'ouroboros',
  key: 'stalwart',
  setTitleId: [883],
  name: 'Stalwart',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 35 and 39 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 35 and 39 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc with enemies buffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Stalwart Badge', href: 'https://homecoming.wiki/wiki/Stalwart_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalwart.png',
}
