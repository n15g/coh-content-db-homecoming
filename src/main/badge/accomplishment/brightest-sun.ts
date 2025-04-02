import { BadgeData } from 'coh-content-db'
import { Twinshot } from '../../contact/twinshot'

export const BrightestSun: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'brightest-sun',
  setTitle: { id: 2015 },
  name: 'Brightest Sun',
  alignment: ['H'],
  badgeText: 'You and your friends have uncovered a Praetorian plot in Galaxy City, which may strike closer to home than you thought.',
  links: [
    { title: 'Brightest Sun Badge', href: 'https://homecoming.wiki/wiki/Brightest_Sun_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brightest-sun.png',
  requirements: [
    { key: 'the-shining-stars-big-leagues', type: 'ARC', missionName: 'The Shining Stars - Big Leagues', contactKey: Twinshot.key },
  ],
}
