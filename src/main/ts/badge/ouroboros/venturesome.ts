import { BadgeData } from 'coh-content-db'

export const Venturesome: BadgeData = {
  type: 'ouroboros',
  key: 'venturesome',
  setTitleId: [874],
  name: 'Venturesome',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 35 and 39 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 35 and 39 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Venturesome Badge', href: 'https://homecoming.wiki/wiki/Venturesome_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturesome.png',
}
