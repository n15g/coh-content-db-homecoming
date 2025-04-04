import { BadgeData } from 'coh-content-db'

export const Marginalized: BadgeData = {
  type: 'OUROBOROS',
  key: 'marginalized',
  setTitle: { id: 914 },
  name: [
    { value: 'Marginalized' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Epic Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Epic Power Pools.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc using no Ancillary powers.',
  links: [
    { title: 'Marginalized Badge', href: 'https://homecoming.wiki/wiki/Marginalized_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/marginalized.png' }],
}
