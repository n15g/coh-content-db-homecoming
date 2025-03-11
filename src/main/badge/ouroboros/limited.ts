import { BadgeData } from 'coh-content-db'

export const Limited: BadgeData = {
  type: 'OUROBOROS',
  key: 'limited',
  setTitle: { id: 911 },
  name: [
    { value: 'Limited' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Temporary Powers.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Limited Badge', href: 'https://homecoming.wiki/wiki/Limited_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/limited.png' }],
}
