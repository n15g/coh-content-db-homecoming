import { BadgeData } from 'coh-content-db'

export const Committed: BadgeData = {
  type: 'VETERAN',
  key: 'committed',
  setTitle: { id: 633 },
  name: [
    { value: 'Committed' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `There's no stopping your campaign to end crime and tyranny wherever it appears. You have attained thirty Veteran levels.` },
    { alignment: 'V', value: `There's no stopping your campaign to instill fear into the hearts of your lessers. You have attained thirty Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 30',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-30.png' }],
}
