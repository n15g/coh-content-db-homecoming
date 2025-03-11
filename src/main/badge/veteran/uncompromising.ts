import { BadgeData } from 'coh-content-db'

export const Uncompromising: BadgeData = {
  type: 'VETERAN',
  key: 'uncompromising',
  setTitle: { id: 1603 },
  name: [
    { value: 'Uncompromising' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You stand up for those who cannot stand up for themselves without compromise. You have attained eighty-one Veteran levels.` },
    { alignment: 'V', value: `Believe it or not, there are still some people out there that don't know not to mess with you. You have attained eighty-one Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 81',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-81.png' }],
}
