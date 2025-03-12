import { BadgeData } from 'coh-content-db'

export const Bold: BadgeData = {
  type: 'OUROBOROS',
  key: 'bold',
  setTitle: { id: 880 },
  name: [
    { value: 'Bold' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Bold Badge', href: 'https://homecoming.wiki/wiki/Bold_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bold.png' }],
}
