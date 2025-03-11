import { BadgeData } from 'coh-content-db'

export const Packrat: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'packrat',
  setTitle: { id: 2365 },
  name: [
    { value: 'Packrat' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The more souvenirs you gather, the more you want. This is starting to become an obsession.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/packrat.png' }],
  acquisition: 'Collect 100 Souvenirs',
  links: [
    { title: 'Packrat Badge', href: 'https://homecoming.wiki/wiki/Packrat_Badge' },
  ],
}
