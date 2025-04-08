import { BadgeData } from 'coh-content-db'

export const IronChef: BadgeData = {
  type: 'achievement',
  key: 'iron-chef',
  setTitleId: [2395],
  name: 'Iron Chef',
  morality: 'all',
  badgeText: `Your trained, discerning eye demands you shun most recipes.`,
  acquisition: 'Reject 1000 recipe drops.',
  links: [
    { title: 'Iron Chef Badge', href: 'https://homecoming.wiki/wiki/Iron_Chef_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png',
}
