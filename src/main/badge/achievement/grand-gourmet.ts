import { BadgeData } from 'coh-content-db'

export const GrandGourmet: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'grand-gourmet',
  setTitle: { id: 2394 },
  name: [
    { value: 'Grand Gourmet' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The commonplace is not for you. Only the finest recipes will do!` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png' }],
  acquisition: 'Reject 500 recipe drops',
  links: [
    { title: 'Grand Gourmet Badge', href: 'https://homecoming.wiki/wiki/Grand_Gourmet_Badge' },
  ],
}
