import { BadgeData } from 'coh-content-db'

export const Committed: BadgeData = {
  type: 'veteran',
  key: 'committed',
  setTitleId: [633],
  name: 'Committed',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `There's no stopping your campaign to end crime and tyranny wherever it appears. You have attained thirty Veteran levels.` },
    { alignment: 'villain', value: `There's no stopping your campaign to instill fear into the hearts of your lessers. You have attained thirty Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 30',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-30.png',
}
