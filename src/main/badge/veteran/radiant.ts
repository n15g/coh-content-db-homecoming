import { BadgeData } from 'coh-content-db'

export const Radiant: BadgeData = {
  type: 'veteran',
  key: 'radiant',
  setTitleId: [1606],
  name: 'Radiant',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Your power is palpable and your very presence is inspiring to others. You have attained eighty-four Veteran levels.` },
    { alignment: 'villain', value: `Your power is palpable and lesser beings tremble in your wake. You have attained eighty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 84',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-84.png',
}
