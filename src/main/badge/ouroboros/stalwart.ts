import { BadgeData } from 'coh-content-db'

export const Stalwart: BadgeData = {
  type: 'OUROBOROS',
  key: 'stalwart',
  setTitle: { id: 883 },
  name: [
    { value: 'Stalwart' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Stalwart Badge', href: 'https://homecoming.wiki/wiki/Stalwart_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalwart.png' }],
}
