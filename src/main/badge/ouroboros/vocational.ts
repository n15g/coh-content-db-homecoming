import { BadgeData } from 'coh-content-db'

export const Vocational: BadgeData = {
  type: 'OUROBOROS',
  key: 'vocational',
  setTitle: { id: 888 },
  name: [
    { value: 'Vocational' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Vocational Badge', href: 'https://homecoming.wiki/wiki/Vocational_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/vocational.png' }],
}
