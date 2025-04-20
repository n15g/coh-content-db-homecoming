import { BadgeData } from 'coh-content-db'

export const Unimaginative: BadgeData = {
  type: 'ouroboros',
  key: 'unimaginative',
  setTitleId: [917],
  name: 'Unimaginative',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no inspirations.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Unimaginative Badge', href: 'https://homecoming.wiki/wiki/Unimaginative_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unimaginative.png',
}
