import { BadgeData } from 'coh-content-db'

export const FoodCritic: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'food-critic',
  setTitle: { id: 2393 },
  name: [
    { value: 'Food Critic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You don't want the same old recipes, you want something exotic.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png' }],
  acquisition: 'Reject 100 recipe drops',
  links: [
    { title: 'Food Critic Badge', href: 'https://homecoming.wiki/wiki/Food_Critic_Badge' },
  ],
}
