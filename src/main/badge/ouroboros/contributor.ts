import { BadgeData } from 'coh-content-db'

export const Contributor: BadgeData = {
  type: 'OUROBOROS',
  key: 'contributor',
  setTitle: { id: 886 },
  name: [
    { value: 'Contributor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 1 and 15 while only using your Primary and Secondary powersets.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 1 and 15 while only using your Primary and Secondary powersets.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc using no pool powers.',
  links: [
    { title: 'Contributor Badge', href: 'https://homecoming.wiki/wiki/Contributor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/contributor.png' }],
}
