import { BadgeData } from 'coh-content-db'

export const GoldMedalist: BadgeData = {
  type: 'OUROBOROS',
  key: 'gold-medalist',
  setTitle: { id: 862 },
  name: [
    { value: 'Gold Medalist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback within the Gold time allowed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback within the Gold time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 30 minutes.',
  links: [
    { title: 'Gold Medalist Badge', href: 'https://homecoming.wiki/wiki/Gold_Medalist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/gold-medalist.png' }],
}
