import { BadgeData } from 'coh-content-db'

export const Venturesome: BadgeData = {
  type: 'OUROBOROS',
  key: 'venturesome',
  setTitle: { id: 874 },
  name: [
    { value: 'Venturesome' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Venturesome Badge', href: 'https://homecoming.wiki/wiki/Venturesome_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturesome.png' }],
}
