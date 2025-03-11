import { BadgeData } from 'coh-content-db'

export const BrightestSun: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'brightest-sun',
  setTitle: { id: 2015 },
  name: [
    { value: 'Brightest Sun' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You and your friends have uncovered a Praetorian plot in Galaxy City, which may strike closer '
        + 'to home than you thought.',
    },
  ],
  acquisition: 'Complete the Level 10-14 Ongoing Training story arc from Twinshot',
  links: [
    { title: 'Brightest Sun Badge', href: 'https://homecoming.wiki/wiki/Brightest_Sun_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brightest-sun.png' },
  ],
}
