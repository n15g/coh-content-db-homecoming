import { BadgeData } from 'coh-content-db'

export const Courageous: BadgeData = {
  type: 'OUROBOROS',
  key: 'courageous',
  setTitle: { id: 879 },
  name: [
    { value: 'Courageous' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Courageous Badge', href: 'https://homecoming.wiki/wiki/Courageous_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/courageous.png' }],
}
