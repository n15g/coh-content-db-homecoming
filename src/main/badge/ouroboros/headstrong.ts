import { BadgeData } from 'coh-content-db'

export const Headstrong: BadgeData = {
  type: 'ouroboros',
  key: 'headstrong',
  setTitleId: [870],
  name: [
    { value: 'Headstrong' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 15 and 19 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 15 and 19 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc while debuffed.',
  links: [
    { title: 'Headstrong Badge', href: 'https://homecoming.wiki/wiki/Headstrong_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/headstrong.png' }],
}
