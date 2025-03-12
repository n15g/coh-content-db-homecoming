import { BadgeData } from 'coh-content-db'

export const Unoriginal: BadgeData = {
  type: 'OUROBOROS',
  key: 'unoriginal',
  setTitle: { id: 919 },
  name: [
    { value: 'Unoriginal' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while not using Inspirations.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using Inspirations.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Unoriginal Badge', href: 'https://homecoming.wiki/wiki/Unoriginal_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unoriginal.png' }],
}
