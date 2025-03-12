import { BadgeData } from 'coh-content-db'

export const Curtailed: BadgeData = {
  type: 'OUROBOROS',
  key: 'curtailed',
  setTitle: { id: 906 },
  name: [
    { value: 'Curtailed' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 15 and 19 while not using any Temporary Powers.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 16-20 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Curtailed Badge', href: 'https://homecoming.wiki/wiki/Curtailed_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/curtailed.png' }],
}
