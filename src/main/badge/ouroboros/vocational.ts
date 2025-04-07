import { BadgeData } from 'coh-content-db'

export const Vocational: BadgeData = {
  type: 'ouroboros',
  key: 'vocational',
  setTitleId: [888],
  name: 'Vocational',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Vocational Badge', href: 'https://homecoming.wiki/wiki/Vocational_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/vocational.png',
}
