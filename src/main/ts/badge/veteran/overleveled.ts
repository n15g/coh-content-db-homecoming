import { BadgeData } from 'coh-content-db'

export const Overleveled: BadgeData = {
  type: 'veteran',
  key: 'overleveled',
  setTitleId: [624],
  name: 'Overleveled',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have come to understand that your experience and prowess do not peak at the highest Security Level. You have attained three Veteran levels.` },
    { alignment: 'villain', value: `You have come to understand that your experience and prowess do not peak at the highest Threat Level. You have attained three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 3.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-3.png',
}
