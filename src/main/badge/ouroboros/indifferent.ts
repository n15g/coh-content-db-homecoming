import { BadgeData } from 'coh-content-db'

export const Indifferent: BadgeData = {
  type: 'OUROBOROS',
  key: 'indifferent',
  setTitle: { id: 922 },
  name: [
    { value: 'Indifferent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Indifferent Badge', href: 'https://homecoming.wiki/wiki/Indifferent_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/indifferent.png' }],
}
