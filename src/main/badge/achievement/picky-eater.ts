import { BadgeData } from 'coh-content-db'

export const PickyEater: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'picky-eater',
  setTitle: { id: 2392 },
  name: [
    { value: 'Picky Eater' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `There are some recipes you just won't touch.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png' }],
  acquisition: 'Reject 50 recipe drops',
  links: [
    { title: 'Picky Eater Badge', href: 'https://homecoming.wiki/wiki/Picky_Eater_Badge' },
  ],
}
