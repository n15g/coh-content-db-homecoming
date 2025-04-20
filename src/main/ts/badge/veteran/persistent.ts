import { BadgeData } from 'coh-content-db'

export const Persistent: BadgeData = {
  type: 'veteran',
  key: 'persistent',
  setTitleId: [1613],
  name: 'Persistent',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Villains have practically given up trying to face you. Your persistence to your goals is utterly unmatched. You have attained ninety-six Veteran levels.` },
    { alignment: 'villain', value: `Heroes have practically given up trying to take back your turf. Your persistence towards taking what you want is utterly unmatched. You have attained ninety-six Veteran levels.` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/persistent.png',
  acquisition: 'Reach Veteran level 96.',
}
