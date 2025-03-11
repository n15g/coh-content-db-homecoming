import { BadgeData } from 'coh-content-db'

export const Allegiant: BadgeData = {
  type: 'VETERAN',
  key: 'allegiant',
  setTitle: { id: 1011 },
  name: [
    { value: 'Allegiant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You've shown the world that your allegiance is to the people and those in need. You have attained fifty-four Veteran levels.` },
    { alignment: 'V', value: `You've shown the world that the only one you serve is yourself. In fact, the way you see it, the world should be serving you. You have attained fifty-four Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 54',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-54.png' }],
}
