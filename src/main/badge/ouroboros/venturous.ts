import { BadgeData } from 'coh-content-db'

export const Venturous: BadgeData = {
  type: 'OUROBOROS',
  key: 'venturous',
  setTitle: { id: 868 },
  name: [
    { value: 'Venturous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 1 and 15 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 1 and 15 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc while debuffed.',
  links: [
    { title: 'Venturous Badge', href: 'https://homecoming.wiki/wiki/Venturous_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturous.png' }],
}
