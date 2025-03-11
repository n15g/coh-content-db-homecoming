import { BadgeData } from 'coh-content-db'

export const Steadfast: BadgeData = {
  type: 'VETERAN',
  key: 'steadfast',
  setTitle: { id: 630 },
  name: [
    { value: 'Steadfast' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `All this crimefighting has people calling you Steadfast. You have attained twenty-one Veteran levels.` },
    { alignment: 'V', value: `You have a reputation for always being there, and always being bad. You have attained twenty-one Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 21',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-21.png' }],
}
