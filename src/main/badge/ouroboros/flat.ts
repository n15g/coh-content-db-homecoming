import { BadgeData } from 'coh-content-db'

export const Flat: BadgeData = {
  type: 'OUROBOROS',
  key: 'flat',
  setTitle: { id: 918 },
  name: [
    { value: 'Flat' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Flat Badge', href: 'https://homecoming.wiki/wiki/Flat_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/flat.png' }],
}
