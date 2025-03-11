import { BadgeData } from 'coh-content-db'

export const Reckless: BadgeData = {
  type: 'OUROBOROS',
  key: 'reckless',
  setTitle: { id: 875 },
  name: [
    { value: 'Reckless' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while under a constant Debuff.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Reckless Badge', href: 'https://homecoming.wiki/wiki/Reckless_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/reckless.png' }],
}
