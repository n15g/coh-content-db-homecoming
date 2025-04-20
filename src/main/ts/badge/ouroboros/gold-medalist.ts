import { BadgeData } from 'coh-content-db'

export const GoldMedalist: BadgeData = {
  type: 'ouroboros',
  key: 'gold-medalist',
  setTitleId: [862],
  name: 'Gold Medalist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback within the Gold time allowed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback within the Gold time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 30 minutes.',
  links: [
    { title: 'Gold Medalist Badge', href: 'https://homecoming.wiki/wiki/Gold_Medalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/gold-medalist.png',
}
