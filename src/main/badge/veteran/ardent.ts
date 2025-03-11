import { BadgeData } from 'coh-content-db'

export const Ardent: BadgeData = {
  type: 'VETERAN',
  key: 'ardent',
  setTitle: { id: 830 },
  name: [
    { value: 'Ardent' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Non-stop crime fighting has earned you the respect you deserve. You have attained thirty-nine Veteran levels.` },
    { alignment: 'V', value: `You take what you want, when you want it and you'll crush anyone who stands in your way. You have attained thirty-nine Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 39',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-39.png' }],
}
