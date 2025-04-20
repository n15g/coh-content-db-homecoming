import { BadgeData } from 'coh-content-db'

export const GrandGourmet: BadgeData = {
  type: 'achievement',
  key: 'grand-gourmet',
  setTitleId: [2394],
  name: 'Grand Gourmet',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `The commonplace is not for you. Only the finest recipes will do!`,
  acquisition: 'Reject 500 recipe drops.',
  links: [
    { title: 'Grand Gourmet Badge', href: 'https://homecoming.wiki/wiki/Grand_Gourmet_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png',
}
