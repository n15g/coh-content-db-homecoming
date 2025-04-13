import { BadgeData } from 'coh-content-db'

export const Uncompromising: BadgeData = {
  type: 'veteran',
  key: 'uncompromising',
  setTitleId: [1603],
  name: 'Uncompromising',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You stand up for those who cannot stand up for themselves without compromise. You have attained eighty-one Veteran levels.` },
    { alignment: 'villain', value: `Believe it or not, there are still some people out there that don't know not to mess with you. You have attained eighty-one Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 81.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-81.png',
}
