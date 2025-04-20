import { BadgeData } from 'coh-content-db'

export const Curtailed: BadgeData = {
  type: 'ouroboros',
  key: 'curtailed',
  setTitleId: [906],
  name: 'Curtailed',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no temp powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Curtailed Badge', href: 'https://homecoming.wiki/wiki/Curtailed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/curtailed.png',
}
