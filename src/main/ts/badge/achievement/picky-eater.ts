import { BadgeData } from 'coh-content-db'

export const PickyEater: BadgeData = {
  type: 'achievement',
  key: 'picky-eater',
  setTitleId: [2392],
  name: 'Picky Eater',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `There are some recipes you just won't touch.`,
  acquisition: 'Reject 50 recipe drops.',
  links: [
    { title: 'Picky Eater Badge', href: 'https://homecoming.wiki/wiki/Picky_Eater_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png',
}
