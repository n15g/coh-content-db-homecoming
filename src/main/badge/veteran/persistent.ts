import { BadgeData } from 'coh-content-db'

export const Persistent: BadgeData = {
  type: 'VETERAN',
  key: 'persistent',
  setTitle: { id: 1613 },
  name: [
    { value: 'Persistent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Villains have practically given up trying to face you. Your persistence to your goals is utterly unmatched. You have attained ninety-six Veteran levels.` },
    { alignment: 'V', value: `Heroes have practically given up trying to take back your turf. Your persistence towards taking what you want is utterly unmatched. You have attained ninety-six Veteran levels.` },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/persistent.png' }],
  acquisition: 'Reach Veteran level 96',
}
