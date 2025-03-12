import { BadgeData } from 'coh-content-db'

export const Valiant: BadgeData = {
  type: 'OUROBOROS',
  key: 'valiant',
  setTitle: { id: 882 },
  name: [
    { value: 'Valiant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Valiant Badge', href: 'https://homecoming.wiki/wiki/Valiant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/valiant.png' }],
}
