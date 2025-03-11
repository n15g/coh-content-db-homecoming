import { BadgeData } from 'coh-content-db'

export const Capped: BadgeData = {
  type: 'OUROBOROS',
  key: 'capped',
  setTitle: { id: 907 },
  name: [
    { value: 'Capped' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 20 and 24 while not using any Temporary Powers.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Capped Badge', href: 'https://homecoming.wiki/wiki/Capped_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/capped.png' }],
}
