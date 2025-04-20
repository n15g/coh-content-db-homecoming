import { BadgeData } from 'coh-content-db'

export const Honorable: BadgeData = {
  type: 'veteran',
  key: 'honorable',
  setTitleId: [1277],
  name: 'Honorable',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You're revered by the people of Paragon City and are considered 'Honorable' for your many good deeds. You have attained sixty-three Veteran levels.` },
    { alignment: 'villain', value: `The people of the Rogue Isles know to refer to you as 'Honorable'... or else. You have attained sixty-three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 63.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-63.png',
}
