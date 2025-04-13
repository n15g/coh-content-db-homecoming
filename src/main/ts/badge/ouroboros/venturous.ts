import { BadgeData } from 'coh-content-db'

export const Venturous: BadgeData = {
  type: 'ouroboros',
  key: 'venturous',
  setTitleId: [868],
  name: 'Venturous',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc while debuffed.',
  links: [
    { title: 'Venturous Badge', href: 'https://homecoming.wiki/wiki/Venturous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturous.png',
}
