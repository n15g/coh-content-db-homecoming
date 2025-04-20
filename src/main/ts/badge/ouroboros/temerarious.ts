import { BadgeData } from 'coh-content-db'

export const Temerarious: BadgeData = {
  type: 'ouroboros',
  key: 'temerarious',
  setTitleId: [876],
  name: 'Temerarious',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc while debuffed.',
  links: [
    { title: 'Temerarious Badge', href: 'https://homecoming.wiki/wiki/Temerarious_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/temerarious.png',
}
