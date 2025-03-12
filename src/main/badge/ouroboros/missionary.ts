import { BadgeData } from 'coh-content-db'

export const Missionary: BadgeData = {
  type: 'OUROBOROS',
  key: 'missionary',
  setTitle: { id: 893 },
  name: [
    { value: 'Missionary' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no pool powers.',
  links: [
    { title: 'Missionary Badge', href: 'https://homecoming.wiki/wiki/Missionary_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/missionary.png' }],
}
