import { BadgeData } from 'coh-content-db'

export const Indifferent: BadgeData = {
  type: 'ouroboros',
  key: 'indifferent',
  setTitleId: [922],
  name: 'Indifferent',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no inspirations.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Indifferent Badge', href: 'https://homecoming.wiki/wiki/Indifferent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/indifferent.png',
}
