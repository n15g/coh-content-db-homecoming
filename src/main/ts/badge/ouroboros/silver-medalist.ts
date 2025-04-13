import { BadgeData } from 'coh-content-db'

export const SilverMedalist: BadgeData = {
  type: 'ouroboros',
  key: 'silver-medalist',
  setTitleId: [863],
  name: 'Silver Medalist',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback within the Silver time allowed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback within the Silver time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 60 minutes.',
  links: [
    { title: 'Silver Medalist Badge', href: 'https://homecoming.wiki/wiki/Silver_Medalist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/silver-medalist.png',
}
