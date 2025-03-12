import { BadgeData } from 'coh-content-db'

export const Lionhearted: BadgeData = {
  type: 'OUROBOROS',
  key: 'lionhearted',
  setTitle: { id: 884 },
  name: [
    { value: 'Lionhearted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Lionhearted Badge', href: 'https://homecoming.wiki/wiki/Lionhearted_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/lionhearted.png' }],
}
