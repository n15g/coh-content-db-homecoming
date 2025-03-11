import { BadgeData } from 'coh-content-db'

export const Adventurous: BadgeData = {
  type: 'OUROBOROS',
  key: 'adventurous',
  setTitle: { id: 871 },
  name: [
    { value: 'Adventurous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Adventurous Badge', href: 'https://homecoming.wiki/wiki/Adventurous_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adventurous.png' }],
}
