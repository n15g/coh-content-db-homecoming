import { BadgeData } from 'coh-content-db'

export const Unoriginal: BadgeData = {
  type: 'ouroboros',
  key: 'unoriginal',
  setTitleId: [919],
  name: 'Unoriginal',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no inspirations.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Unoriginal Badge', href: 'https://homecoming.wiki/wiki/Unoriginal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unoriginal.png',
}
