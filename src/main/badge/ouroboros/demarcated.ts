import { BadgeData } from 'coh-content-db'

export const Demarcated: BadgeData = {
  type: 'OUROBOROS',
  key: 'demarcated',
  setTitle: { id: 912 },
  name: [
    { value: 'Demarcated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Temporary Powers.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no temp powers.',
  links: [
    { title: 'Demarcated Badge', href: 'https://homecoming.wiki/wiki/Demarcated_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/demarcated.png' }],
}
