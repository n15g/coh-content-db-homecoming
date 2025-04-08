import { BadgeData } from 'coh-content-db'

export const BronzeMedalist: BadgeData = {
  type: 'ouroboros',
  key: 'bronze-medalist',
  setTitleId: [864],
  name: 'Bronze Medalist',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback within the Bronze time allowed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback within the Bronze time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 120 minutes.',
  links: [
    { title: 'Bronze Medalist Badge', href: 'https://homecoming.wiki/wiki/Bronze_Medalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bronze-medalist.png',
}
