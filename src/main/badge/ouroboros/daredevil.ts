import { BadgeData } from 'coh-content-db'

export const Daredevil: BadgeData = {
  type: 'OUROBOROS',
  key: 'daredevil',
  setTitle: { id: 872 },
  name: [
    { value: 'Daredevil' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc while debuffed.  (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Daredevil Badge', href: 'https://homecoming.wiki/wiki/Daredevil_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/daredevil.png' }],
}
