import { BadgeData } from 'coh-content-db'

export const Enduring: BadgeData = {
  type: 'VETERAN',
  key: 'enduring',
  setTitle: { id: 1279 },
  name: [
    { value: 'Enduring' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `This world is in a state of constant change, but there's one thing people can count on: you. You have attained sixty-six Veteran levels.` },
    { alignment: 'V', value: `This world is in a state of constant change, but there's one thing that people will always fear: you. You have attained sixty-six Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 66',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-66.png' }],
}
