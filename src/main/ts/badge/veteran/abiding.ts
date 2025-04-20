import { BadgeData } from 'coh-content-db'

export const Abiding: BadgeData = {
  type: 'veteran',
  key: 'abiding',
  setTitleId: [1057],
  name: 'Abiding',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You're still around fighting the good fight after all this time. If one thing could be said about you, it's that you're consistent. You have attained fifty-seven Veteran levels.` },
    { alignment: 'villain', value: `You're still around crushing your foes and taking what is rightfully yours after all this time. If one thing could be said about you it's that you're persistent. You have attained fifty-seven Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 57.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-57.png',
}
