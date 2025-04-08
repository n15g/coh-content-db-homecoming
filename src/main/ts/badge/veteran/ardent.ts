import { BadgeData } from 'coh-content-db'

export const Ardent: BadgeData = {
  type: 'veteran',
  key: 'ardent',
  setTitleId: [830],
  name: 'Ardent',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Non-stop crime fighting has earned you the respect you deserve. You have attained thirty-nine Veteran levels.` },
    { alignment: 'villain', value: `You take what you want, when you want it and you'll crush anyone who stands in your way. You have attained thirty-nine Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 39',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-39.png',
}
