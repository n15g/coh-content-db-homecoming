import { BadgeData } from 'coh-content-db'

export const Motivated: BadgeData = {
  type: 'VETERAN',
  key: 'motivated',
  setTitle: { id: 970 },
  name: [
    { value: 'Motivated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've gone this far and the road ahead looks as bright as ever. You have attained forty-eight Veteran levels.` },
    { alignment: 'V', value: `You've gone this far and the future looks even more promising. You have attained forty-eight Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 48',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-48.png' }],
}
