import { BadgeData } from 'coh-content-db'

export const Temerarious: BadgeData = {
  type: 'OUROBOROS',
  key: 'temerarious',
  setTitle: { id: 876 },
  name: [
    { value: 'Temerarious' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc while debuffed.',
  links: [
    { title: 'Temerarious Badge', href: 'https://homecoming.wiki/wiki/Temerarious_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/temerarious.png' }],
}
