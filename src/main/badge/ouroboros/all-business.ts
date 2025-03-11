import { BadgeData } from 'coh-content-db'

export const AllBusiness: BadgeData = {
  type: 'OUROBOROS',
  key: 'all-business',
  setTitle: { id: 890 },
  name: [
    { value: 'All Business' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'All Business Badge', href: 'https://homecoming.wiki/wiki/All_Business_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/all-business.png' }],
}
