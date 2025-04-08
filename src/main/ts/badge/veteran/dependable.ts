import { BadgeData } from 'coh-content-db'

export const Dependable: BadgeData = {
  type: 'veteran',
  key: 'dependable',
  setTitleId: [626],
  name: 'Dependable',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You've achieved nine Veteran levels. Paragon City can depend on you to be there.` },
    { alignment: 'villain', value: `You've achieved nine Veteran levels and your powers are still growing.` },
  ],
  acquisition: 'Reach Veteran level 9',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-9.png',
}
