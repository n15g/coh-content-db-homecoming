import { BadgeData } from 'coh-content-db'

export const MasterOfTheBAF: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-baf',
  setTitle: { id: 1979 },
  name: [
    { value: 'Master of the B.A.F.' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Behavioral Adjustment Facility.' },
  ],
  acquisition: 'Earn the Not On My Watch, Alarm Raiser, Gotta Keep \'Em Separated, and Strong and Pretty badges',
  links: [
    { title: 'Master of the B.A.F. Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_B.A.F._Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-baf.png' },
  ],
}
