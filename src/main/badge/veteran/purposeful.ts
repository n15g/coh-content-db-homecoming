import { BadgeData } from 'coh-content-db'

export const Purposeful: BadgeData = {
  type: 'VETERAN',
  key: 'purposeful',
  setTitle: { id: 1601 },
  name: [
    { value: 'Purposeful' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Your drive and purpose is what keeps you going and standing up for what you believe in. You have attained seventy-eight Veteran levels.` },
    { alignment: 'V', value: `Your drive and purpose is what keeps you going and crushing your foes beneath your heel. You have attained seventy-eight Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 78',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-78.png' }],
}
