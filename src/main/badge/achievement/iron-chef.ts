import { BadgeData } from 'coh-content-db'

export const IronChef: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'iron-chef',
  setTitle: { id: 2395 },
  name: [
    { value: 'Iron Chef' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Your trained, discerning eye demands you shun most recipes.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png' }],
  acquisition: 'Reject 1000 recipe drops',
  links: [
    { title: 'Iron Chef Badge', href: 'https://homecoming.wiki/wiki/Iron_Chef_Badge' },
  ],
}
