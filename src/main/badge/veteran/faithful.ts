import { BadgeData } from 'coh-content-db'

export const Faithful: BadgeData = {
  type: 'VETERAN',
  key: 'faithful',
  setTitle: { id: 625 },
  name: [
    { value: 'Faithful' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Paragon City thanks you for your continued support in keeping the City safe. You have attained six Veteran levels.` },
    { alignment: 'V', value: `You are ever faithful in your service, to cause pain and misery to all those in your way. You have attained six Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 6',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-6.png' }],
}
