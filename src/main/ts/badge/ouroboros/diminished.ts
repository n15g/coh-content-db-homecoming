import { BadgeData } from 'coh-content-db'

export const Diminished: BadgeData = {
  type: 'ouroboros',
  key: 'diminished',
  setTitleId: [904],
  name: 'Diminished',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no temp powers.',
  links: [
    { title: 'Diminished Badge', href: 'https://homecoming.wiki/wiki/Diminished_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/diminished.png',
}
