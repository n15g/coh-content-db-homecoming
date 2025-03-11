import { BadgeData } from 'coh-content-db'

export const CutOff: BadgeData = {
  type: 'OUROBOROS',
  key: 'cut-off',
  setTitle: { id: 913 },
  name: [
    { value: 'Cut-Off' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Epic Power Pools.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Epic Power Pools.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no Ancillary powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Cut-Off Badge', href: 'https://homecoming.wiki/wiki/Cut-Off_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/cut-off.png' }],
}
