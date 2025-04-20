import { BadgeData } from 'coh-content-db'

export const FoodCritic: BadgeData = {
  type: 'achievement',
  key: 'food-critic',
  setTitleId: [2393],
  name: 'Food Critic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You don't want the same old recipes, you want something exotic.`,
  acquisition: 'Reject 100 recipe drops.',
  links: [
    { title: 'Food Critic Badge', href: 'https://homecoming.wiki/wiki/Food_Critic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/reject-recipe.png',
}
