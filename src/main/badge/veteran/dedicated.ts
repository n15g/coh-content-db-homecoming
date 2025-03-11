import { BadgeData } from 'coh-content-db'

export const Dedicated: BadgeData = {
  type: 'VETERAN',
  key: 'dedicated',
  setTitle: { id: 632 },
  name: [
    { value: 'Dedicated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Few can match your dedication to fighting for good and Justice. You've achieved twenty-seven Veteran levels.` },
    { alignment: 'V', value: `Few can trounce your dedication to your villainous craft. You have attained twenty-seven Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 27',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-27.png' }],
}
