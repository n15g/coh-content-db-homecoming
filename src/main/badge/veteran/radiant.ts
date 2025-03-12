import { BadgeData } from 'coh-content-db'

export const Radiant: BadgeData = {
  type: 'VETERAN',
  key: 'radiant',
  setTitle: { id: 1606 },
  name: [
    { value: 'Radiant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Your power is palpable and your very presence is inspiring to others. You have attained eighty-four Veteran levels.` },
    { alignment: 'V', value: `Your power is palpable and lesser beings tremble in your wake. You have attained eighty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 84',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-84.png' }],
}
