import { BadgeData } from 'coh-content-db'

export const Professional: BadgeData = {
  type: 'ouroboros',
  key: 'professional',
  setTitleId: [889],
  name: 'Professional',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 20 and 24 while only using your Primary and Secondary powersets.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 20 and 24 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 21-25 Flashback story arc using no pool powers.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Professional Badge', href: 'https://homecoming.wiki/wiki/Professional_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/professional.png',
}
