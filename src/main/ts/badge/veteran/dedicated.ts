import { BadgeData } from 'coh-content-db'

export const Dedicated: BadgeData = {
  type: 'veteran',
  key: 'dedicated',
  setTitleId: [632],
  name: 'Dedicated',
  releaseDate: '2019-01-01',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Few can match your dedication to fighting for good and Justice. You've achieved twenty-seven Veteran levels.` },
    { alignment: 'villain', value: `Few can trounce your dedication to your villainous craft. You have attained twenty-seven Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 27.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-27.png',
}
