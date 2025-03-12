import { BadgeData } from 'coh-content-db'

export const Fearless: BadgeData = {
  type: 'OUROBOROS',
  key: 'fearless',
  setTitle: { id: 881 },
  name: [
    { value: 'Fearless' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 25 and 29 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 25 and 29 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Fearless Badge', href: 'https://homecoming.wiki/wiki/Fearless_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/fearless.png' }],
}
