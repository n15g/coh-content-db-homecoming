import { BadgeData } from 'coh-content-db'

export const CutOff: BadgeData = {
  type: 'ouroboros',
  key: 'cut-off',
  setTitleId: [913],
  name: 'Cut-Off',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Epic Power Pools.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Epic Power Pools.` },
  ],
  acquisition: 'Complete a level 41-45 Flashback story arc using no Ancillary powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Cut-Off Badge', href: 'https://homecoming.wiki/wiki/Cut-Off_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/cut-off.png',
}
