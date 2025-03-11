import { BadgeData } from 'coh-content-db'

export const Unimaginative: BadgeData = {
  type: 'OUROBOROS',
  key: 'unimaginative',
  setTitle: { id: 917 },
  name: [
    { value: 'Unimaginative' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Unimaginative Badge', href: 'https://homecoming.wiki/wiki/Unimaginative_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unimaginative.png' }],
}
