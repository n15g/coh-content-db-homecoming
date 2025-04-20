import { BadgeData } from 'coh-content-db'

export const Cliche: BadgeData = {
  type: 'ouroboros',
  key: 'cliche',
  setTitleId: [915],
  name: 'Cliché',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while not using Inspirations.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no inspirations.',
  links: [
    { title: 'Cliche Badge', href: 'https://homecoming.wiki/wiki/Cliche_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/cliche.png',
}
