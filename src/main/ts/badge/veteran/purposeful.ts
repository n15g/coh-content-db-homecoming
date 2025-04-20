import { BadgeData } from 'coh-content-db'

export const Purposeful: BadgeData = {
  type: 'veteran',
  key: 'purposeful',
  setTitleId: [1601],
  name: 'Purposeful',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Your drive and purpose is what keeps you going and standing up for what you believe in. You have attained seventy-eight Veteran levels.` },
    { alignment: 'villain', value: `Your drive and purpose is what keeps you going and crushing your foes beneath your heel. You have attained seventy-eight Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 78.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-78.png',
}
