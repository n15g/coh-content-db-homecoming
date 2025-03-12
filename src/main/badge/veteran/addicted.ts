import { BadgeData } from 'coh-content-db'

export const Addicted: BadgeData = {
  type: 'VETERAN',
  key: 'addicted',
  setTitle: { id: 635 },
  name: [
    { value: 'Addicted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Despite your trials and long-standing experience, you are still around fighting the good fight. You have attained thirty-six Veteran levels.` },
    { alignment: 'V', value: `You just won't stop after all this time. Even Lord Recluse is surprised you've lasted this long. You have attained thirty-six Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 36',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-36.png' }],
}
