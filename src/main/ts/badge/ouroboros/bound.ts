import { BadgeData } from 'coh-content-db'

export const Bound: BadgeData = {
  type: 'ouroboros',
  key: 'bound',
  setTitleId: [910],
  name: 'Bound',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 35 and 39 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no temp powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Bound Badge', href: 'https://homecoming.wiki/wiki/Bound_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bound.png',
}
