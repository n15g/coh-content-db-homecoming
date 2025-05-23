import { BadgeData } from 'coh-content-db'

export const Hindered: BadgeData = {
  type: 'ouroboros',
  key: 'hindered',
  setTitleId: [909],
  name: 'Hindered',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 30 and 34 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no temp powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Hindered Badge', href: 'https://homecoming.wiki/wiki/Hindered_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/hindered.png',
}
