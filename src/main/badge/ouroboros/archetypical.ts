import { BadgeData } from 'coh-content-db'

export const Archetypical: BadgeData = {
  type: 'OUROBOROS',
  key: 'archetypical',
  setTitle: { id: 891 },
  name: [
    { value: 'Archetypical' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 30 and 34 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 30 and 34 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 31-35 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Archetypical Badge', href: 'https://homecoming.wiki/wiki/Archetypical_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/archetypical.png' }],
}
