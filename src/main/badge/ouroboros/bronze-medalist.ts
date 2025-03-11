import { BadgeData } from 'coh-content-db'

export const BronzeMedalist: BadgeData = {
  type: 'OUROBOROS',
  key: 'bronze-medalist',
  setTitle: { id: 864 },
  name: [
    { value: 'Bronze Medalist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback within the Bronze time allowed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback within the Bronze time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 120 minutes.',
  links: [
    { title: 'Bronze Medalist Badge', href: 'https://homecoming.wiki/wiki/Bronze_Medalist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bronze-medalist.png' }],
}
