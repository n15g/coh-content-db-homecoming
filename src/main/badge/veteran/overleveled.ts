import { BadgeData } from 'coh-content-db'

export const Overleveled: BadgeData = {
  type: 'VETERAN',
  key: 'overleveled',
  setTitle: { id: 624 },
  name: [
    { value: 'Overleveled' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have come to understand that your experience and prowess do not peak at the highest Security Level. You have attained three Veteran levels.` },
    { alignment: 'V', value: `You have come to understand that your experience and prowess do not peak at the highest Threat Level. You have attained three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 3',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-3.png' }],
}
