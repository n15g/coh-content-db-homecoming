import { BadgeData } from 'coh-content-db'

export const Demarcated: BadgeData = {
  type: 'ouroboros',
  key: 'demarcated',
  setTitleId: [912],
  name: 'Demarcated',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no temp powers.',
  links: [
    { title: 'Demarcated Badge', href: 'https://homecoming.wiki/wiki/Demarcated_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/demarcated.png',
}
