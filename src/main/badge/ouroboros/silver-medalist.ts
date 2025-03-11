import { BadgeData } from 'coh-content-db'

export const SilverMedalist: BadgeData = {
  type: 'OUROBOROS',
  key: 'silver-medalist',
  setTitle: { id: 863 },
  name: [
    { value: 'Silver Medalist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback within the Silver time allowed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback within the Silver time allowed.` },
  ],
  acquisition: 'Complete a Flashback story arc in under 60 minutes.',
  links: [
    { title: 'Silver Medalist Badge', href: 'https://homecoming.wiki/wiki/Silver_Medalist_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/silver-medalist.png' }],
}
