import { BadgeData } from 'coh-content-db'

export const Diligent: BadgeData = {
  type: 'VETERAN',
  key: 'diligent',
  setTitle: { id: 1611 },
  name: [
    { value: 'Diligent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `It's safe to say Paragon City would not be the same if it weren't for your tireless efforts. You have attained ninety-three Veteran levels.` },
    { alignment: 'V', value: `It is safe to say the world would be a far different place if it weren't for you. You have attained ninety-three Veteran levels.` },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/diligent.png' }],
  acquisition: 'Reach Veteran level 93',
}
