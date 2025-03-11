import { BadgeData } from 'coh-content-db'

export const Abiding: BadgeData = {
  type: 'VETERAN',
  key: 'abiding',
  setTitle: { id: 1057 },
  name: [
    { value: 'Abiding' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You're still around fighting the good fight after all this time. If one thing could be said about you, it's that you're consistent. You have attained fifty-seven Veteran levels.` },
    { alignment: 'V', value: `You're still around crushing your foes and taking what is rightfully yours after all this time. If one thing could be said about you it's that you're persistent. You have attained fifty-seven Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 57',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-57.png' }],
}
