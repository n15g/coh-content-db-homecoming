import { BadgeData } from 'coh-content-db'

export const Rash: BadgeData = {
  type: 'OUROBOROS',
  key: 'rash',
  setTitle: { id: 873 },
  name: [
    { value: 'Rash' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Rash Badge', href: 'https://homecoming.wiki/wiki/Rash_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/rash.png' }],
}
