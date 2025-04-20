import { BadgeData } from 'coh-content-db'

export const Unswerving: BadgeData = {
  type: 'veteran',
  key: 'unswerving',
  setTitleId: [634],
  name: 'Unswerving',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `After paying your dues you have been recognized as 'Unswerving' by the government of Paragon City. You have attained thirty-three Veteran levels.` },
    { alignment: 'villain', value: `You continue to elude capture after all this time. You have attained thirty-three Veteran levels.` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-33.png',
  acquisition: 'Reach Veteran level 33.',
}
