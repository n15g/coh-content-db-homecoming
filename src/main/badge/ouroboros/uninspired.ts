import { BadgeData } from 'coh-content-db'

export const Uninspired: BadgeData = {
  type: 'OUROBOROS',
  key: 'uninspired',
  setTitle: { id: 923 },
  name: [
    { value: 'Uninspired' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no inspirations.',
  links: [
    { title: 'Uninspired Badge', href: 'https://homecoming.wiki/wiki/Uninspired_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/uninspired.png' }],
}
