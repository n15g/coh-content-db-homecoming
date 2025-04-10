import { BadgeData } from 'coh-content-db'

export const Diligent: BadgeData = {
  type: 'veteran',
  key: 'diligent',
  setTitleId: [1611],
  name: 'Diligent',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `It's safe to say Paragon City would not be the same if it weren't for your tireless efforts. You have attained ninety-three Veteran levels.` },
    { alignment: 'villain', value: `It is safe to say the world would be a far different place if it weren't for you. You have attained ninety-three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 93.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/diligent.png',
}
