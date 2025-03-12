import { BadgeData } from 'coh-content-db'

export const Bound: BadgeData = {
  type: 'OUROBOROS',
  key: 'bound',
  setTitle: { id: 910 },
  name: [
    { value: 'Bound' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 35 and 39 while not using any Temporary Powers.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 36-40 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Bound Badge', href: 'https://homecoming.wiki/wiki/Bound_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bound.png' }],
}
