import { BadgeData } from 'coh-content-db'

export const Distinguished: BadgeData = {
  type: 'veteran',
  key: 'distinguished',
  setTitleId: [1285],
  name: [
    { value: 'Distinguished' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `With a selfless history as long as yours, you gain respect wherever you go from heroes and villains alike. You have attained seventy-two Veteran levels.` },
    { alignment: 'villain', value: `With a villainous history as long as yours, you gain respect wherever you go from heroes and villains alike. You have attained seventy-two Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 72',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-72.png' }],
}
