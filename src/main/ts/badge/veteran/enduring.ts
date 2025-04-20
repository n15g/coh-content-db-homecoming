import { BadgeData } from 'coh-content-db'

export const Enduring: BadgeData = {
  type: 'veteran',
  key: 'enduring',
  setTitleId: [1279],
  name: 'Enduring',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `This world is in a state of constant change, but there's one thing people can count on: you. You have attained sixty-six Veteran levels.` },
    { alignment: 'villain', value: `This world is in a state of constant change, but there's one thing that people will always fear: you. You have attained sixty-six Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 66.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-66.png',
}
