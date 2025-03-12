import { BadgeData } from 'coh-content-db'

export const Dependable: BadgeData = {
  type: 'VETERAN',
  key: 'dependable',
  setTitle: { id: 626 },
  name: [
    { value: 'Dependable' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've achieved nine Veteran levels. Paragon City can depend on you to be there.` },
    { alignment: 'V', value: `You've achieved nine Veteran levels and your powers are still growing.` },
  ],
  acquisition: 'Reach Veteran level 9',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-9.png' }],
}
