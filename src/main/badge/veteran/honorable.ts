import { BadgeData } from 'coh-content-db'

export const Honorable: BadgeData = {
  type: 'VETERAN',
  key: 'honorable',
  setTitle: { id: 1277 },
  name: [
    { value: 'Honorable' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You're revered by the people of Paragon City and are considered 'Honorable' for your many good deeds. You have attained sixty-three Veteran levels.` },
    { alignment: 'V', value: `The people of the Rogue Isles know to refer to you as 'Honorable'... or else. You have attained sixty-three Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 63',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-63.png' }],
}
